'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('salons', 'opening', {
        type: Sequelize.TIME,
      })
      .then(() => {
        queryInterface.addColumn('salons', 'closing', {
          type: Sequelize.TIME,
        });
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('salons', 'opening').then(() => {
      return queryInterface.removeColumn('salons', 'closing');
    });
  },
};
