'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      { 
        name: 'Joaquim José',  
        phone: '83 9999-1234', 
        birth: '1980-06-09',
        creationDate: new Date(),
        updateDate: new Date(),
      },
      { 
        name: 'Maria',  
        phone: '83 9999-2345', 
        birth: '1981-07-10',
        creationDate: new Date(),
        updateDate: new Date(),
      },
      { 
        name: 'Betania',  
        phone: '83 9999-3456', 
        birth: '1982-08-11',
        creationDate: new Date(),
        updateDate: new Date(),
      }
    ]);    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});  
  }
};
