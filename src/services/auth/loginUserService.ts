import bcrypt from 'bcrypt';
import { redisHelpers, jwtHelpers } from '../../helpers';

// Services
import findUserService from '../user/findUserService';

// Types
interface LoginParamType {
  phone: string;
  password: string;
}

interface LoginPromiseType {
  found: boolean;
  authorised?: boolean;
  data?: {
    accessToken: string;
    refreshToken: string;
    userId: string;
  };
}

const loginUserService = async (data: LoginParamType) => {
  try {
    const { found, user } = await findUserService(data.phone);
    if (!found) {
      return new Promise<LoginPromiseType>((resolve) =>
        resolve({ found: false }),
      );
    }
    const match = await bcrypt.compare(data.password, user!.password);
    if (!match) {
      return new Promise<LoginPromiseType>((resolve) =>
        resolve({ found: true, authorised: false }),
      );
    }

    // Generating access & refresh token ( JWT )
    const accessToken = await jwtHelpers.generateAccessToken(user!.userId);
    const refreshToken = await jwtHelpers.generateRefreshToken(user!.userId);

    // Saving refreshToken in redisDB
    await redisHelpers.SET(user!.userId, refreshToken);

    return new Promise<LoginPromiseType>((resolve) =>
      resolve({
        found: true,
        authorised: true,
        data: {
          userId: user!.userId,
          accessToken,
          refreshToken,
        },
      }),
    );
  } catch (err) {
    return new Promise<LoginPromiseType>((_, reject) => reject(err));
  }
};

export default loginUserService;
