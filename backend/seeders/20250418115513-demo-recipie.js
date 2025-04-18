'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('recipies', [
      {
        image: 'https://plus.unsplash.com/premium_photo-1681826395340-d34408303d6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FsYWR8ZW58MHx8MHx8fDA%3D',
        title: 'Green Salad',
        description: 'this is for u ',
        belongsTo:'1',
        category:'salad',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
