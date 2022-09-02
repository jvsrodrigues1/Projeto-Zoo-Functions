const data = require('../data/zoo_data');

const { species } = data;

// funcao para testagem sem parametros //
function semParametros() {
  return species.reduce((acc, animal) => {
    acc[animal.location].push(animal.name);
    return acc;
  }, { SE: [], SW: [], NE: [], NW: [] });
}

// funcao para testagem com parametros//
function comParametros(sex, specie) {
  if (sex !== undefined) {
    return specie.residents.reduce((result, resident) => {
      if (resident.sex === sex) {
        result.push(resident.name);
      }
      return result;
    }, []);
  }
  return specie.residents.map((resident) => resident.name);
}

// funcao para retonar os filtros de sexo ou nao, localizacao e os ordena//
function filtros(options) {
  const { sex, sorted } = options;
  const result = { SE: [], SW: [], NE: [], NW: [] };
  species.forEach((specie) => {
    let animals = [];
    if (sorted === true) {
      animals = comParametros(sex, specie).sort();
    } else {
      animals = comParametros(sex, specie);
    }
    result[specie.location].push({ [specie.name]: animals });
    animals = [];
  });
  return result;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    const result = semParametros();
    return result;
  }
  const result = filtros(options);
  return result;
}

module.exports = getAnimalMap;
