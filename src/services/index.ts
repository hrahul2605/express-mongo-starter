// USER Services
import findUserService from './user/findUserService';

// AUTH Services
import registerUserService from './auth/registerUserService';
import loginUserService from './auth/loginUserService';
import refreshTokenService from './auth/refreshTokenService';
import logoutUserService from './auth/logoutUserService';

const user = { findUserService };
const auth = {
  registerUserService,
  loginUserService,
  refreshTokenService,
  logoutUserService,
};

export { auth, user };
