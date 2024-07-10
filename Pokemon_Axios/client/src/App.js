import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const [time, setTime] = useState(new Date().toLocaleString());
 
  useEffect(() => {
      const int = setInterval(
          () => setTime(new Date().toLocaleString()),
          1000
      );

      return function clearInt() {
          clearInterval(int);
      }
  }, []);


  const handleFetch = () => {
    setLoading(true);
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => {
        for (let i = 0; i < response.data.results.length; i++) {
          const newPokemon = response.data.results[i].name;
          setPokemon(prevPokemon => [...prevPokemon, newPokemon]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div className="App">
      <div>Current Time: {time}</div>
      <button className='fetch-button' onClick={handleFetch}>Fetch Pokemon</button>
      <ul>
        {
          loading && pokemon.length < 807 ? 
          "loading..."
          :
          pokemon.map((item, i) => {
            return <li key={i}>{item}</li>
          })
        }

      </ul>
    </div>
  );
}

export default App;
