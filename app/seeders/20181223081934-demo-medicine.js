'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medicines', [{
      form: 'CAP.',
      name: 'AXET',
      strength: '500mg',
      frequency: '1+0+1',
      remark: 'before eating',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Medicines', null, {});
  }
};
