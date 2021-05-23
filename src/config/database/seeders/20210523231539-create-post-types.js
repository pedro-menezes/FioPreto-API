'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post_types', [
      {
        id: 1,
        type: 'dica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        type: 'feed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('post_types', null, {});
  },
};
