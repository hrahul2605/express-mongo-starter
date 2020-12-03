import registerValidate from './validators/auth/registerValidate';
import loginValidate from './validators/auth/loginValidate';
import refreshTokenValidate from './validators/auth/refreshTokenValidate';
import privateHeaderValidate from './validators/privateHeaderValidate';

const validators = {
  registerValidate,
  loginValidate,
  refreshTokenValidate,
  privateHeaderValidate,
};

export { validators };
