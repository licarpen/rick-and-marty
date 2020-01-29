import Chance from 'chance';
const chance = new Chance();

const characters = [...Array(8)]
  .map(i => ({name: chance.name(), image: image1, status: chance.pickone(['alive', 'dead', 'unknown']), species: chance.animal(), gender: chance.pickone(['male', 'female', 'nonbinary']), origin: chance.city(), lastLocation: chance.city() }))

console.log(characters);
