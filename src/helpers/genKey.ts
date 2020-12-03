/* eslint-disable no-console */
import { randomBytes } from 'crypto';

const accessKey = randomBytes(32).toString('hex');
const refreshKey = randomBytes(32).toString('hex');

console.table({ accessKey, refreshKey });
