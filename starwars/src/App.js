import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './components/CharacterCard/CharacterCard.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState('');

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const getCharacters = async () => {
    try {
      let response = await axios.get('https://swapi.co/api/people/');
      let characters = response.data.results;
      console.log(typeof(characters))
      setCharacters(characters);
    } catch(err) {
      console.log(`There was an error retrieving your characters: ${err}`)
    }
  }

  useEffect( () => {
    getCharacters();
  },[]);
  
  if(characters !== '') {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='characterCards'>
          {
            characters.map((character, index) => (
              <CharacterCard key={index} character={character} />
            ))
          }
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='waiting'>
          <h1>Waiting for data</h1>
        </div>
      </div>
    );
  }

  
}

export default App;
