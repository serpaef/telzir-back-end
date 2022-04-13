'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phone_plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      plan: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      minutes: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phone_plans');
  },
};
