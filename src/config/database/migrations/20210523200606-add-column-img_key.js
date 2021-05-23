'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('posts', 'key_img', {
      type: Sequelize.TEXT,
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('posts', 'key_img');
  },
};
