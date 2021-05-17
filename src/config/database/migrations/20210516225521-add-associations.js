'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('addresses', 'salon_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'salons',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('addresses', 'salon_id');
  },
};
