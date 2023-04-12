'use strict';
/** @type {import('sequelize-cli').Migration} */

//const passwordgenerate = require('../common/passwordgenerate')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull:false,
        type: Sequelize.STRING
      },
      password: {
       // passwordgenerate,
        allowNull:false,
        type: Sequelize.STRING
      },
      email: {
        allowNull:false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      address: {
        allowNull:false,
        type: Sequelize.STRING
      },
      usertypeid: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      createAt: {
        
        type: Sequelize.BIGINT
      },
      createdBy: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      updateAt: {
        
        type: Sequelize.BIGINT
      },
      updateBy: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};