/*
 *  Entry point for all api endpoints
 *
 *
 */

import { Application } from 'express';

// Controllers
import boilerPlate from './boilerPlate';

export default ({ expressApp }: { expressApp: Application }) => {
  expressApp.use('/boilerPlate', boilerPlate);
};
