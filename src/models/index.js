<<<<<<< HEAD

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const envConfigs =  require('../config/config');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
=======
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import envConfigs from '../database/config/config';

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const basename = path.basename(__filename);
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
<<<<<<< HEAD
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
=======
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

<<<<<<< HEAD
//models/index.js
=======
// models/index.js
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
