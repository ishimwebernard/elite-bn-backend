<<<<<<< HEAD
'use strict';
=======
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
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
<<<<<<< HEAD
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
=======
  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
