'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', { 
      cpf: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('user');     
  }
};
