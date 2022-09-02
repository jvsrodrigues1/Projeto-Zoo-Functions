const getOpeningHours = require('../src/getOpeningHours');
const validateHour = require('../src/getOpeningHours');
const validateDay = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');
const validateAbbreviation = require('../src/getOpeningHours');
const isStringRepresentNumber = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verificacao AM e PM', () => {
    expect(() => (!['AM', 'PM'].includes('AM', 'PM') === true).toThrow(Error));
  });
  it('Verificacao hora entre 0 e 12', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });
  it('Teste verificacao de horas', () => {
    expect(() => (validateHour('15:13')).toThrow(Error));
  });
  it('Verificacao minuto valido entre 0 e 59', () => {
    expect(() => { getOpeningHours('Monday', '12:70-AM'); }).toThrow('The minutes must be between 0 and 59');
  });
  it('Teste Validacao de minutos', () => {
    expect(() => (validateHour('15:80')).toThrow(Error));
  });
  it('Verificao para diga valido', () => {
    expect(() => (validateDay('Monday')).toThrow(Error));
  });
  it('Verificacao teste vazio', () => {
    expect(getOpeningHours('', '')).toEqual(hours);
  });
  it('Teste validacao de abreviacao ', () => {
    expect(() => validateAbbreviation('AP', 'PA')).toThrow(Error);
  });
  it('Teste de abreviacao AM ou PM', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-CM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testando abreviacao ', () => {
    expect(() => validateAbbreviation('AM', 'PM')).toBeTruthy();
  });
  it('Aberto ou fechado teste 1', () => {
    expect(getOpeningHours('Monday', '9:00-AM')).toBeTruthy();
  });
  it('Aberto ou fechado teste 2', () => {
    expect(getOpeningHours('Tuesday', '9:00-PM')).toBeTruthy();
  });
  it('Aberto ou fechado teste 3', () => {
    expect(getOpeningHours('Wednesday', '10:00-PM')).toBeTruthy();
  });
  it('Teste de numbers ou string', () => {
    expect(() => isStringRepresentNumber('9', '9')).toThrow(Error);
  });
  it('Verificacao mensagem aberto', () => {
    expect(getOpeningHours('Wednesday', '10:00-AM')).toEqual('The zoo is open');
  });
});
