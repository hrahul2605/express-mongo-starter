/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_URI: string;
      JWT_SECRET: string;
      BCRYPT_SALT_ROUNDS: string;
    }
  }
}

export {};
