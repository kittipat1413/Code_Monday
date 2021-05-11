const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const { DB_HOST, DATABASE_URL } = process.env;

module.exports =  new Sequelize(DATABASE_URL, {
  host: DB_HOST,
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});


