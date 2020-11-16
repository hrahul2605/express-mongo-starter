import registerController from './auth/registerController';
import loginController from './auth/loginController';
import refreshTokenController from './auth/refreshTokenController';
import logoutController from './auth/logoutController';

const auth = {
  registerController,
  loginController,
  refreshTokenController,
  logoutController,
};

export { auth };
