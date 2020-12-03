import { jwtHelpers, redisHelpers } from '../../helpers';

interface ParamType {
  accessToken: any;
  userId: any;
}

const logoutUserService = async (data: ParamType): Promise<boolean> => {
  try {
    await jwtHelpers.verifyAccessToken(data.accessToken);

    redisHelpers.DELETE(data.userId);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

export default logoutUserService;
