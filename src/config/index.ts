import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS,
  REDIS_PORT: parseInt(process.env.REDIS_PORT!, 10),
  REDIS_HOST: process.env.REDIS_HOST,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
};
