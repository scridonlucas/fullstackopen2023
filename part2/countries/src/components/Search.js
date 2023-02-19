const Search = ({ searchInput, handleSearchInput }) => {
  return (
    <div>
      find countries{' '}
      <input type="text" value={searchInput} onChange={handleSearchInput} />
    </div>
  );
};

export default Search;
