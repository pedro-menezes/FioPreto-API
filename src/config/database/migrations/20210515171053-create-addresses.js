'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      zip: {
        type: Sequelize.NUMERIC(8),
      },
      district: {
        type: Sequelize.STRING,
      },
      street: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      street1: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING(2),
      },
      ddd: {
        type: Sequelize.NUMERIC(2),
      },
      lat: {
        type: Sequelize.NUMERIC(10, 2),
      },
      lng: {
        type: Sequelize.NUMERIC(10, 2),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  },
};
