'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.BIGINT
      },
      width: {
        type: Sequelize.BIGINT
      },
      length: {
        type: Sequelize.BIGINT
      },
      height: {
        type: Sequelize.BIGINT
      },
      image_url: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.BIGINT
      },
      categoryId: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('Items');
  }
};