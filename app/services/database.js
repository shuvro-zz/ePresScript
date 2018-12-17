const path = require('path');

const dbFile = path.join(__dirname, '/db/test.db');

const Sequelize = require('sequelize');
const Op = Sequelize.Op; //to use operators in database query

export const database = {
  check: checkUser
};
const connection = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: dbFile
});
const Users = connection.define('users', {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  }
});

function checkUser(username:string , password:string) {
  return new Promise(function (resolve, reject) {
    Users.findAll({where: {
        [Op.or]: [{username: username}, {password: password}]
      }})
      .then(users => {
        if (users.length == 0) {
          reject(null);
        }else {
          resolve(users);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
