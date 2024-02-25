'use strict';

function generateRandomItems(categoryId, count) {
  const item = [];
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < count; i++) {
    const sku = `A${i + 1}`; // Generate unique SKU starting with 'A' and incrementing number
    const name = chars[Math.floor(Math.random() * chars.length)]; // Random single character
    const description = name.repeat(Math.floor(Math.random() * 10) + 1); // Description with repeating character
    const weight = Math.floor(Math.random() * 10) + 1; // Random weight between 1 and 10
    const width = Math.floor(Math.random() * 10) + 1; // Random width between 1 and 10
    const length = Math.floor(Math.random() * 10) + 1; // Random length between 1 and 10
    const height = Math.floor(Math.random() * 10) + 1; // Random height between 1 and 10
    const imageUrl = 'https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b'; // Placeholder image URL
    const price = Math.floor(Math.random() * 1000) + 1000; // Random price between 1000 and 1999

    item.push({
      sku,
      name,
      description,
      weight,
      width,
      length,
      height,
      image_url:imageUrl,
      price,
      categoryId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  return item;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Items', generateRandomItems(2, 100));
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Items', null, {});
  }
};
