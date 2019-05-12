'use strict';
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.json')[env];
const modelDirectory = path.join(__dirname, '/models');

let dbDirectory = path.join(__dirname, process.env.NODE_ENV ==='development' ? '/db/development.db' : '/db/production.db');
const log = require('electron-log');

if (process.env.NODE_ENV ==='production'){
  dbDirectory = path.join(process.resourcesPath , '/db/production.db');
}
log.info("Database Models ");
log.info( 'Env :' + process.env.NODE_ENV);
log.info ('DB Dir' + dbDirectory);
log.info ('Models directory '+ modelDirectory);

//Database Connection
let sequelize = new Sequelize('', '', '', {
  dialect: 'sqlite',
  host: '127.0.0.1',
  storage: dbDirectory
});

//let sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
  .authenticate()
  .then(() => {
    log.info('Connection has been established successfully.');
  })
  .catch(err => {
    log.info('Unable to connect to the database:', err);
  });


let models = {};

const DB = (function () {
  if (Object.keys(models).length) {
    return models;
  }

  let modules = [
    require('./user'),
    require('./settings'),
    require('./medicine'),
    require('./treatment'),
    require('./treatmentmedicine'),
  ];

  // Initialize models
  modules.forEach((module) => {
    const model = module(sequelize, Sequelize);
    models[model.name] = model;
  });

  // Apply associations
  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  return models;
})();

export default DB;
