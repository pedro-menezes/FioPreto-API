'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('salons', 'key_img', {
        type: Sequelize.TEXT,
      })
      .then(() => {
        queryInterface.addColumn('salons', 'img', {
          type: Sequelize.TEXT,
        });
      });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('salons', 'key_img').then(() => {
      return queryInterface.removeColumn('salons', 'img');
    });
  },
};
