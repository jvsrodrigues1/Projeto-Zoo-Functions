const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((animals) => ids.includes(animals.id));
}

module.exports = getSpeciesByIds;
