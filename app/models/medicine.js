'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define('Medicine', {
    form: DataTypes.ENUM('CAP.', 'CAP./TAB', 'CREAM','DROP','INF.','INHALATION','INJ','OINTMENT', 'SHAMPOO',' SOAP','SOLUTION','SPRAY','SUPPOSITORY','SUSPENSION','SYP.','TAB.'),
    name: DataTypes.STRING,
    strength: DataTypes.STRING,
    frequency: DataTypes.STRING,
    remark: DataTypes.STRING
  }, {});
  Medicine.associate = function(models) {
    Medicine.belongsToMany(models.Treatment, {
      through: 'TreatmentMedicine',
      as: 'treatment',
      foreignKey: 'medicine_id'
    });
  };
  return Medicine;
};
