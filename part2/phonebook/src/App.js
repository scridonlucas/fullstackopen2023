import _ from 'lodash';
import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import FormInput from './components/FormInput';
import Search from './components/Search';
import Notification from './components/Notification';
import PersonsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newSearch, setSearch] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    PersonsService.getAll().then((personData) => setPersons(personData));
  }, []);

  function handleNameChange(event) {
    setNewName(event.target.value);
  }

  function handleNewPhoneNumber(event) {
    setNewPhoneNumber(event.target.value);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function addPerson(event) {
    event.preventDefault();

    const alreadyExists = persons.some((p) => p.name === newName);

    if (alreadyExists) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook. Do you want to replace the old number with a new one?`
        )
      ) {
        const personObject = persons.find((p) => p.name === newName);
        const newPersonObject = {
          ...personObject,
          phoneNumber: newPhoneNumber,
        };
        PersonsService.update(personObject.id, newPersonObject)
          .then((responseData) => {
            setPersons(
              persons.map((p) =>
                p.id !== newPersonObject.id ? p : responseData
              )
            );
            setNewName('');
            setNewPhoneNumber('');
            setMessage(`${responseData.name} was succesfully replaced`);
            setTimeout(() => {
              setMessage('');
            }, 2000);
          })
          .catch((error) => {
            setMessage(`${error.responseData.data.error}`);
            setTimeout(() => {
              setMessage('');
            }, 2000);
          });
      }
      return false;
    } else {
      const newPersonObject = {
        name: newName,
        phoneNumber: newPhoneNumber,
      };

      PersonsService.create(newPersonObject)
        .then((responseData) => {
          setPersons(persons.concat(responseData));
          setNewName('');
          setNewPhoneNumber('');
          setMessage(`${responseData.name} was succesfully added`);
          setTimeout(() => {
            setMessage('');
          }, 2000);
        })
        .catch((error) => {
          setMessage(`${error.responseData.data.error}`);
          setTimeout(() => {
            setMessage('');
          }, 2000);
        });
    }
  }

  function deleteButton(id) {
    const person = persons.find((p) => p.id === id);
    if (
      window.confirm(`Are you sure you want to delete ${person.name}?`) === true
    ) {
      PersonsService.remove(person.id)
        .then((status) => {
          setPersons(persons.filter((p) => p.id !== id));
          setMessage(`${person.name} was succesfully removed`);
          setTimeout(() => {
            setMessage('');
          }, 2000);
        })
        .catch((error) => {
          setMessage(`${error.responseData.data.error}`);
          setTimeout(() => {
            setMessage('');
          }, 2000);
        });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Search newSearch={newSearch} handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <FormInput
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhoneNumber={newPhoneNumber}
        handleNewPhoneNumber={handleNewPhoneNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch} onClick={deleteButton} />
    </div>
  );
};

export default App;
