import { Router } from 'express';
import BoilerPlateService from '../services/boilerPlate';

const router = Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.get('/test', async (req, res) => {
  res.status(200);
  const { record } = await BoilerPlateService.init();
  res.json({ record });
});

export default router;
