const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  const areManagers = employees.find((manager) => manager.managers.includes(id));
  if (areManagers) {
    return true;
  }
  if (!areManagers) {
    return false;
  }
}

function getRelatedEmployees(managerId) {
  const array = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  employees.forEach((_item, index) => {
    if (employees[index].managers.includes(managerId)) {
      array.push(`${employees[index].firstName} ${employees[index].lastName}`);
    }
  });
  return array;
}

module.exports = { isManager, getRelatedEmployees };
