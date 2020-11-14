import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URL || 'mongodb://127.0.0.1:27017/drip',
};
