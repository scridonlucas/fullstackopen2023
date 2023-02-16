import _ from 'lodash';
import { useState } from 'react';
import Persons from './components/Persons';
import FormInput from './components/FormInput';
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 },
  ]);

  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newSearch, setSearch] = useState('');

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
    const personObject = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: newName,
    };
    const exists = persons.some((person) => _.isEqual(person, personObject));
    if (exists) {
      alert(`${newName} is already added to phonebook`);
      return false;
    }
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewPhoneNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={persons} newSearch={newSearch} />
    </div>
  );
};

export default App;
