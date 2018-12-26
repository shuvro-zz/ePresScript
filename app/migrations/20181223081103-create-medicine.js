'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Medicines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      form: {
        type: Sequelize.ENUM,
        values:['CAP.', 'CAP./TAB', 'CREAM','DROP','INF.','INHALATION','INJ','OINTMENT', 'SHAMPOO',' SOAP','SOLUTION','SPRAY','SUPPOSITORY','SUSPENSION','SYP.','TAB.']
      },
      name: {
        type: Sequelize.STRING
      },
      strength: {
        type: Sequelize.STRING
      },
      frequency: {
        type: Sequelize.STRING
      },
      remark: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Medicines');
  }
};
