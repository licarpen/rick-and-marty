/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Character from './Character.js';
import Chance from 'chance';
const chance = new Chance();
import styles from './Character.css';

const characters = [...Array(8)]
  // eslint-disable-next-line no-unused-vars
  .map(i => ({ name: chance.name(), image: 'http://placegoat.com/300/300', status: chance.pickone(['alive', 'dead', 'unknown']), species: chance.animal(), gender: chance.pickone(['male', 'female', 'nonbinary']), origin: chance.city(), lastLocation: chance.city() }));

const App = () => (
  <React.Fragment>
    <Header />
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className={styles.container}>
      // eslint-disable-next-line react/jsx-key
      {characters.map(character => <Character image={character.image} name={character.name} status={character.status} species={character.species} gender={character.gender} origin={character.origin} lastLocation={character.lastLocation}/>)};
    </div>
    <Footer />
  </React.Fragment>
);

export default App;
