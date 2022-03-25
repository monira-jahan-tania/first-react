import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/* function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (

    <div>
      <h1>Visiting Every Country of The World</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country names={country.name.common} populations={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.names}</h2>
      <h4>Popultaion: {props.populations}</h4>
    </div>
  )
} */

export default App;
