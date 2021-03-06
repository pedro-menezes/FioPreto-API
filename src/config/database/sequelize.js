const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../../.env') });

module.exports = {
  url: process.env.DATABASE_URL,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.NODE_ENV !== 'test' ? process.env.DB_NAME : `${process.env.DB_NAME}-test`,
  host: process.env.DB_HOST,
  ssl: false,
  dialect: 'postgres',
  protocol: 'postgres',
};
