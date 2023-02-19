const Search = ({ searchInput, handleSearchInput }) => {
  return (
    <div>
      <input type="text" value={searchInput} onChange={handleSearchInput} />
    </div>
  );
};

export default Search;
