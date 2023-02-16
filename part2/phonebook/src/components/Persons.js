const Person = ({ name, phoneNumber }) => {
  return (
    <>
      <li>
        {name} {phoneNumber}
      </li>
    </>
  );
};

const Persons = ({ persons, newSearch }) => {
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
            />
          ))}
      </ul>
    </>
  );
};

export default Persons;
