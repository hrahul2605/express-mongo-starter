/*
 *  Entry point for all api endpoints
 *
 *
 */

import { Application } from 'express';

import { User, Auth } from './routes';

export default ({ expressApp }: { expressApp: Application }) => {
  expressApp.use('/user', User);
  expressApp.use('/auth', Auth);
  expressApp.use('/', (_, res) => {
    const noRoute = {
      status: 400,
      prettyMessage: 'Invalid Route.',
      success: false,
    };

    res.status(noRoute.status);
    res.send(noRoute);
  });
};
