const Sequelize = require('sequelize');
const db = require('../config/db');

const Teacher = db.define('Teacher', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
        validate: {
          notNull: { msg: 'Missing field : first_name' },
          notEmpty: { msg: 'first_name must not be empty' }
        },
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
        validate: {
          notNull: { msg: 'Missing field : last_name' },
          notEmpty: { msg: 'last_name must not be empty' }
        },
  },
  date_of_birth: {
    type: Sequelize.DATEONLY,
    allowNull: false,
        validate: {
          isDate : true
        },
  },
});


module.exports = Teacher;
