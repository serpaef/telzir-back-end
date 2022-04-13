'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'rates',
      [
        { origin: '011', destination: '016', price_per_minute: 1.9 },
        { origin: '016', destination: '011', price_per_minute: 2.9 },
        { origin: '011', destination: '017', price_per_minute: 1.7 },
        { origin: '017', destination: '011', price_per_minute: 2.7 },
        { origin: '011', destination: '018', price_per_minute: 0.9 },
        { origin: '018', destination: '011', price_per_minute: 1.9 },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rates', null, {});
  },
};
