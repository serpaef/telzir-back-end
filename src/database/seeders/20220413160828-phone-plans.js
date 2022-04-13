'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'phone_plans',
      [
        { plan: 'FaleMais 30', minutes: 30 },
        { plan: 'FaleMais 60', minutes: 60 },
        { plan: 'FaleMais 120', minutes: 120 },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phone_plans', null, {});
  },
};
