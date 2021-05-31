'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn('schedulings', 'dateTime')
      .then(() => {
        queryInterface.addColumn('schedulings', 'date', {
          type: Sequelize.DATE,
        });
      })
      .then(() => {
        queryInterface.addColumn('schedulings', 'time', {
          type: Sequelize.TIME,
        });
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn('schedulings', 'date')
      .then(() => {
        queryInterface.removeColumn('schedulings', 'time');
      })
      .then(() => {
        queryInterface.addColumn('schedulings', 'dateTime', {
          type: Sequelize.DATETIME,
        });
      });
  },
};
