import { jwtHelpers, redisHelpers } from '../../helpers';

interface ParamType {
  accessToken: any;
  userId: any;
}

interface PromiseType {
  success: boolean;
}

const logoutUserService = async (data: ParamType) => {
  try {
    await jwtHelpers.verifyAccessToken(data.accessToken);

    redisHelpers.DELETE(data.userId);
    return true;
  } catch (err) {
    return new Promise<PromiseType>((_, reject) => reject(err));
  }
};

export default logoutUserService;
