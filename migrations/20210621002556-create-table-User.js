'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', { 
      cpf: {
        type: Sequelize.STRING,
        primaryKey: true,        
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      creationDate:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updateDate:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    });    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');     
  }
};
