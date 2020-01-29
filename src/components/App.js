import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Character from './Character.js';
import image1 from '../assets/aqua_morty.jpg'
import Chance from 'chance';
const chance = new Chance();

const characters = [...Array(8)]
  .map(i => ({name: chance.name(), image: image1, status: chance.pickone(['alive', 'dead', 'unknown']), species: chance.animal(), gender: chance.pickone(['male', 'female', 'nonbinary']), origin: chance.city(), lastLocation: chance.city() }))

console.log(characters);

const App = () => (
  <React.Fragment>
    <Header />
    <Character image={image1} name='Aqua Morty' status='unknown' species='humanoid fish-person' gender='male' origin='unknown' lastLocation='Citadel of Ricks'/>
    <Footer />
  </React.Fragment>
);

export default App;
