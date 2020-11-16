import { Router } from 'express';

// Controllers
import { auth } from '../controllers';

// Middlewares
import { validators } from '../middlewares';

const router = Router();

router.post('/register', validators.registerValidate, auth.registerController);
router.post('/login', validators.loginValidate, auth.loginController);
router.post(
  '/refresh-token',
  [validators.privateHeaderValidate, validators.refreshTokenValidate],
  auth.refreshTokenController,
);
router.post('/logout', validators.privateHeaderValidate, auth.logoutController);

export default router;
