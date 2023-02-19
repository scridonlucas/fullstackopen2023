import Weather from './Weather';
const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.official}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>Langagues</h3>
      <ul>
        {Object.values(country.languages).map((languague) => (
          <li key={languague}>{languague}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" />
      <Weather country={country} />
    </div>
  );
};

export default Country;
