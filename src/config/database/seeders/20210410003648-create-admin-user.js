'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Adminisitrador',
        email: 'admin@ioasys.com',
        password: '$2a$08$sTBZNZoGD0Gk1VaEo9bRaOxCDDCEpdMZyFtFsxBeczuJ05kojy.sa',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
