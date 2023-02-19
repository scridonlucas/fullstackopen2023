import Weather from './Weather';
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
      <Weather country={country} />
    </div>
  );
};

export default Country;
