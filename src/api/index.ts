/*
 *  Entry point for all api endpoints
 *
 *
 */

import { Application } from 'express';

import { User } from './routes';

export default ({ expressApp }: { expressApp: Application }) => {
  expressApp.use('/user', User);
};
