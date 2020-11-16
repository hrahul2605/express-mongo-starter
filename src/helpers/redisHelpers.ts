import { promisify } from 'util';
import redisClient from '../loaders/redisClientLoader';

const setAsync = promisify(redisClient.SET).bind(redisClient);
const getAsync = promisify(redisClient.GET).bind(redisClient);

const SET = async (key: string, value: string) => {
  const res = await setAsync(key, value);
  return new Promise((resolve, reject) =>
    res !== 'OK' ? reject(new Error('REDIS SET FAILED')) : resolve(res),
  );
};

const GET = async (key: string) => {
  try {
    const val = await getAsync(key);
    return new Promise((resolve) => resolve(val));
  } catch (err) {
    return new Promise((_, reject) => reject(new Error('REDIS GET ERROR')));
  }
};

const DELETE = async (key: string) => {
  const val = redisClient.DEL(key);
  return new Promise((resolve, reject) =>
    !val ? reject(new Error('REDIS DELETE FAILED')) : resolve(),
  );
};

export { SET, GET, DELETE };
