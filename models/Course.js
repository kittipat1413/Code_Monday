const Sequelize = require('sequelize');
const db = require('../config/db');
const Teacher = require('./Teacher.js');

const Course = db.define('Course', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  course_name: {
    type: Sequelize.STRING,
    allowNull: false,
        validate: {
          notNull: { msg: 'Missing field : course_name' },
          notEmpty: { msg: 'course_name must not be empty' }
        },
  },
  course_description: {
    type: Sequelize.STRING,
    allowNull: false,
        validate: {
          notNull: { msg: 'Missing field : course_description' },
          notEmpty: { msg: 'course_description must not be empty' }
        },
  },
  teacherId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {         // Course belongsTo Teacher 1:1
      model: 'Teachers',
      key: 'id'
    },
  }
});


module.exports = Course;

