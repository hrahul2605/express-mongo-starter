// USER Services
import findUserService from './user/findUserService';

// AUTH Services
import registerUserService from './auth/registerUserService';
import loginUserService from './auth/loginUserService';

const user = { findUserService };
const auth = { registerUserService, loginUserService };

export { auth, user };
