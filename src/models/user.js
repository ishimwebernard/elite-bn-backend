<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
=======
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
<<<<<<< HEAD
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
=======
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE',
    });
  };
  return User;
};

// src/models/user.js
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
