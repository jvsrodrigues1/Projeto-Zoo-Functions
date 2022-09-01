const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((criancas) => criancas.age < 18).length;
  const adult = entrants.filter((adultos) => adultos.age >= 18 && adultos.age < 50).length;
  const senior = entrants.filter((idosos) => idosos.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrantsValue = countEntrants(entrants);
  const valueChild = entrantsValue.child * data.prices.child;
  const valueAdult = entrantsValue.adult * data.prices.adult;
  const valueSenior = entrantsValue.senior * data.prices.senior;
  return valueChild + valueAdult + valueSenior;
}

module.exports = { calculateEntry, countEntrants };
