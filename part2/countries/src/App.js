import { useState, useEffect } from 'react';
import Search from './components/Search';
import Countries from './components/Countries';
import CountriesService from './services/countries';

const App = () => {
  const [countries, setCountries] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    CountriesService.getAll().then((countries) => setCountries(countries));
  }, []);

  if (countries === null) {
    return null;
  }
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleShowButton = (country) => {
    setSearchInput(country.name.official);
  };

  return (
    <div>
      <Search searchInput={searchInput} handleSearchInput={handleSearchInput} />
      <Countries
        countries={countries}
        searched={searchInput}
        handleShowButton={handleShowButton}
      />
    </div>
  );
};
export default App;
