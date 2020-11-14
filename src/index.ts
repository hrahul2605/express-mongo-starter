import express from 'express';

import config from './config';
import loaders from './loaders';
import initRoutes from './api';

const server = async () => {
  const app = express();

  await loaders({ expressApp: app });
  initRoutes({ expressApp: app }); // initialise all endpoints

  app.listen(config.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started at http://localhost:${config.PORT}`);
  });
};

server();
