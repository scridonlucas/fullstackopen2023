const Search = ({ newSearch, handleSearch }) => {
  return (
    <div>
      filter shown with a: <input value={newSearch} onChange={handleSearch} />
    </div>
  );
};

export default Search;
