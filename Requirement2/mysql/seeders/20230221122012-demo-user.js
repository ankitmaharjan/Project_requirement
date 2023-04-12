'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: '1',
      username: 'John',
      password: 'joe123',
      email: 'joewilliam123@gmail.com',
      phone: '9841547683',
      address: 'lazimpat',
      usertypeid: '1',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

