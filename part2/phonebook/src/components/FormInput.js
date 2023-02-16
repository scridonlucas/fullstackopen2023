const FormInput = ({
  addPerson,
  newName,
  handleNameChange,
  newPhoneNumber,
  handleNewPhoneNumber,
}) => {
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{' '}
          <input value={newPhoneNumber} onChange={handleNewPhoneNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default FormInput;
