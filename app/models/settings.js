'use strict';
module.exports = (sequelize, DataTypes) => {
  const Settings = sequelize.define('Settings', {
    default_printer: DataTypes.STRING,
    background_print: DataTypes.STRING,
    access_token: DataTypes.STRING
  }, {});
  Settings.associate = function(models) {
    // associations can be defined here
  };
  return Settings;
};
