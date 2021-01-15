module.exports = {
<<<<<<< HEAD
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
=======
  up: (queryInterface) => queryInterface.bulkInsert(
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
    'Users',
    [
      {
        firstName: 'Edmond',
        lastName: 'Ndayishimiye',
        email: 'edmond@example.com',
        password: 'samplepassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Alexi',
        lastName: 'vacilli',
        email: 'alexi@example.com',
        password: 'samplepassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

<<<<<<< HEAD
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};

// database/seeds/xxxx-User.js
=======
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
