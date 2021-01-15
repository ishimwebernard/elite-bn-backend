<<<<<<< HEAD
require('dotenv').config()
=======
require('dotenv').config();
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c

module.exports = {
  development: {
    url: process.env.DB_DEV_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.DB_TEST_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DB_PROD_URL,
    dialect: 'postgres',
  },
<<<<<<< HEAD
}
=======
};
>>>>>>> b476e38b0b0038e56abe6253c90e0595dbb8853c
