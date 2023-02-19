import Country from './Country';

const Countries = ({ countries, searched, handleShowButton }) => {
  if (searched === '') {
    return null;
  }

  const filteredCountries = countries.filter((country) =>
    country.name.official.toLowerCase().includes(searched.toLowerCase())
  );

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />;
  }

  return (
    <>
      <ul>
        {filteredCountries.map((country) => (
          <li key={country.altSpellings[0]}>
            {country.name.official}{' '}
            <button
              onClick={() => {
                handleShowButton(country);
              }}
            >
              show
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
