import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default async ({ app }: { app: express.Application }) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  return app;
};
