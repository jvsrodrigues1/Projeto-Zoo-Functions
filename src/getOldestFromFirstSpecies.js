const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employees2) => employees2.id === id).responsibleFor[0];
  const animals = data.species.find((species) => species.id === firstSpecie).residents;
  const oldest = animals.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
