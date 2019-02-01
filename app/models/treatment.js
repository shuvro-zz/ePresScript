'use strict';
module.exports = (sequelize, DataTypes) => {
  const Treatment = sequelize.define('Treatment', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Treatment.associate = function(models) {
    Treatment.belongsToMany(models.Medicine, {
      through: 'TreatmentMedicine',
      as: 'medicine',
      foreignKey: 'treatment_id'
    });
  };
  return Treatment;
};