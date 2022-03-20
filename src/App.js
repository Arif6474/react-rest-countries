
import './App.css';
import Countries from './component/Countries/Countries';
import Country from './component/Country/Country';


function App() {
  return (
    <div className="App">
    <Countries></Countries>
    <Country></Country>
    </div>
  );










/*   
  function LoadCountries () {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
      fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
    }, [])
    return (
      <div>
        <h1>Visiting every country of the world</h1>
        <h3>Available countries: {countries.length}</h3>
        {
          countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
        }
      </div>
    )
  }

function Country (props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Population: {props.population}</p>
    </div>
  )
}


 */
}
export default App;
