const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const oldAnimal = data.species.find((species) => species.name === animal)
    .residents.every((residentes) => residentes.age >= age);
  return oldAnimal;
}
//teste..//

module.exports = getAnimalsOlderThan;
