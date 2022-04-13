'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      origin: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      destination: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pricePerMinute: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'price_per_minute',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rates');
  },
};
