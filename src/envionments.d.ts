/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_URI: string;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
      BCRYPT_SALT_ROUNDS: string;
      REDIS_PORT: string;
      REDIS_HOST: string;
      MONGO_USER: string;
      MONGO_PASSWORD: string;
    }
  }
}

export {};
