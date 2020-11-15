import { Router } from 'express';

import { user } from '../controllers';
import { validators } from '../middlewares';

const router = Router();

router.post('/register', validators.registerValidate, user.registerUser);
router.post('/login', validators.loginValidate, user.loginUser);

export default router;
