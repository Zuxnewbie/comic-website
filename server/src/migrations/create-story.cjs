'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stories', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      story_id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      love: {
        type: Sequelize.STRING
      },
      view: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      follow: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.STRING
      },
      author_id: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Stories');
  }
};