'use strict';
module.exports = (sequelize, DataTypes) => {
  const TreatmentMedicine = sequelize.define('TreatmentMedicine', {
    id_treatment: DataTypes.INTEGER,
    id_medicine: DataTypes.INTEGER
  }, {});
  TreatmentMedicine.associate = function(models) {
    // associations can be defined here
  };
  return TreatmentMedicine;
};