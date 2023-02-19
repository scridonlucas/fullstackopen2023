const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.official}</h2>
      <p>capital: {country.capital}</p>
      <p>area: {country.area}</p>
      <h3>langagues</h3>
      <ul>
        {Object.values(country.languages).map((languague) => (
          <li key={languague}>{languague}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="" />
    </div>
  );
};

const Countries = ({ countries, searched, handleShowButton }) => {
  if (searched === '') {
    return null;
  }

  const filteredCountries = countries.filter((country) =>
    country.name.official.toLowerCase().includes(searched)
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
