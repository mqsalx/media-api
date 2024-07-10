'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      decription: {
        type: Sequelize.STRING
      },
      date_initial: {
        type: Sequelize.DATEONLY
      },
      teacher_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "people",
          key: "id"
        }
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};