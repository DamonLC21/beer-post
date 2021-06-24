import './App.css';
import { useState, useEffect} from 'react';

const beersUrl = 'http://localhost:3000/beers'
const handleResponse = response => response.json()
const fetchBeers = () => fetch(beersUrl).then(handleResponse)

function App() {
  const [beers, setBeers] = useState([])
  const [name, setName] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    fetchBeers()
      .then(setBeers)
  })

  return (
    <div className="App">
    <h1>Beer App</h1>      
    <form>
      <label>Name</label>
      <input 
        name="name" 
        value={name} 
        onChange={({target}) => setName(target.value)} 
      />
      <label>Type</label>
      <input 
        name="type" 
        value={type} 
        onChange={({target}) => setType(target.value)} 
      />
      <input type="submit" />
    </form>
    </div>
  );
}

export default App;
