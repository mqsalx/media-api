'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: "teacher_id"
      })
      Person.hasMany(models.Registration, {
        foreignKey: "student_id",
        scope: {
          status: "registered",
        },
        as: "peopleRegistrations"
      })
    }
  }
  Person.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: "people",
  });
  return Person;
};