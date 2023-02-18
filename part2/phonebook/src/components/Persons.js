const Person = ({ name, phoneNumber, deleteButton }) => {
  return (
    <>
      <li>
        {name} {phoneNumber} <button onClick={deleteButton}>Delete</button>
      </li>
    </>
  );
};

const Persons = ({ persons, newSearch, onClick }) => {
  return (
    <>
      <ul>
        {persons
          .filter((person) => person.name.toLowerCase().includes(newSearch))
          .map((person) => (
            <Person
              key={person.id}
              name={person.name}
              phoneNumber={person.phoneNumber}
              deleteButton={() => {
                onClick(person.id);
              }}
            />
          ))}
      </ul>
    </>
  );
};

export default Persons;
