'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define('Medicine', {
    from: DataTypes.STRING,
    name: DataTypes.STRING,
    strength: DataTypes.STRING,
    frequency: DataTypes.STRING,
    remark: DataTypes.STRING
  }, {});
  Medicine.associate = function(models) {
    // associations can be defined here
  };
  return Medicine;
};