import { Router } from 'express';

import { user } from '../controllers';
import { validators } from '../middlewares';

const router = Router();

// Register user
router.post('/register', validators.registerValidate, user.registerUser);

export default router;
