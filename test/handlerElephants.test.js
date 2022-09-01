const handlerElephants = require('../src/handlerElephants');
const { species } = require('../data/zoo_data');
const values = require('../src/handlerElephants');

const elephants = species.find((specie) => specie.name === 'elephants');
const mapElefants = elephants.residents.map((elephant) => elephant.name);

describe('Testes da função HandlerElephants', () => {
  it('Parametro indefinido retorna undefined', () => {
    expect(handlerElephants(undefined)).toEqual(undefined);
  });
  it('Parâmetro inválido, uma string e necessaria', () => {
    expect(handlerElephants(5)).toEqual('Parâmetro inválido, uma string e necessaria');
  });
  it('Numero de Elefantes Residentes', () => {
    expect(values('count')).toEqual(elephants.residents.length);
  });
  it('Nomes dos Elefantes', () => {
    expect(values('names')).toEqual(mapElefants);
  });
  it('Idade media', () => {
    const averageAge = ({ residents }) => residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;
    expect(values('averageAge')).toEqual(averageAge(elephants));
  });
  it('Valor - default', () => {
    expect(values('default')).toEqual(null);
  });
  it('Popularidade ser igual a 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
