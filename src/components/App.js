import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Character from './Character.js';
import Chance from 'chance';
const chance = new Chance();
import styles from './Character.css';

const characters = [...Array(8)]
  .map(i => ({name: chance.name(), image: "http://placegoat.com/300/300", status: chance.pickone(['alive', 'dead', 'unknown']), species: chance.animal(), gender: chance.pickone(['male', 'female', 'nonbinary']), origin: chance.city(), lastLocation: chance.city() }))

console.log(characters);

const App = () => (
  <React.Fragment>
    <Header />
    <div className={styles.container}>
    {characters.map(character => <Character image={character.image} name={character.name} status={character.status} species={character.species} gender={character.gender} origin={character.origin} lastLocation={character.lastLocation}/>)};
    </div>
    <Footer />
  </React.Fragment>
);

export default App;
