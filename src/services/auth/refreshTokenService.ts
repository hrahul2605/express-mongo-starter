import { jwtHelpers, redisHelpers } from '../../helpers';

interface ParamType {
  refreshToken: any;
  accessToken: any;
  userId: any;
}

interface PromiseType {
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
  match?: boolean;
  expired?: boolean;
}
const refreshTokenService = async ({
  accessToken,
  refreshToken,
  userId,
}: ParamType): Promise<PromiseType> => {
  try {
    await jwtHelpers.verifyAccessToken(accessToken); // expired expected
    const refreshPayload: any = await jwtHelpers.verifyRefreshToken(
      refreshToken,
    );
    if (refreshPayload === 'expired') return { expired: true };

    if (refreshPayload.userId !== userId) return { match: false };

    //   Getting previous saved token
    const prevRefreshToken = await redisHelpers.GET(refreshPayload.userId);

    if (prevRefreshToken !== refreshToken) return { match: false };

    // Generating new pair of tokens
    const newAccessToken = await jwtHelpers.generateAccessToken(userId);
    const newRefreshToken = await jwtHelpers.generateRefreshToken(userId);

    // Update value in redis
    await redisHelpers.SET(userId, newRefreshToken);

    return {
      tokens: { refreshToken: newRefreshToken, accessToken: newAccessToken },
      match: true,
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default refreshTokenService;
