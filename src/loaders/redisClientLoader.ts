/* eslint-disable no-console */
import redis from 'redis';
import config from '../config';

const client = redis.createClient({
  port: config.REDIS_PORT,
  host: config.REDIS_HOST,
});

client.on('connect', () => {
  console.log('Redis: Connected.');
});

client.on('ready', () => {
  console.log('Redis: Ready.');
});

client.on('reconnecting', () => {
  console.log('Redis: Reconnecting. ');
});

client.on('error', (err) => {
  console.log(`Redis: Error ${err.message}`);
});

client.on('end', () => {
  console.log('Redis: Disconnected.');
});

process.on('SIGINT', () => {
  client.quit();
});

export default client;
