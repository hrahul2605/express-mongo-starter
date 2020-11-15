import jwt from 'jsonwebtoken';
import config from '../config';

const generateJwt = (userId: string) => {
  const token = jwt.sign({ userId }, config.JWT_SECRET!);

  return token;
};

export default generateJwt;
