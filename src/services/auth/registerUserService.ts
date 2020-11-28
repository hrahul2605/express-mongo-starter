import bcrypt from 'bcrypt';
import config from '../../config';

// Models
import UserModel from '../../models/Users';

// Helpers
import { redisHelpers, jwtHelpers } from '../../helpers';

interface RegisterParamType {
  phone: string;
  email: string;
  name: string;
  password: string;
}
interface RegisterPromiseType {
  accessToken: string;
  refreshToken: string;
  userId: string;
}

const registerUserService = async (
  data: RegisterParamType,
): Promise<RegisterPromiseType> => {
  try {
    const { phone, email, name, password } = data;
    const userId = `DRIP${phone}USER`;
    const status = 'PENDING';
    const updatedAt: number = Date.now();

    // Generating Password Hash
    const hashedPassoword = await bcrypt.hash(
      password,
      parseInt(config.BCRYPT_SALT_ROUNDS!, 10),
    );
    // Generating access & refresh token ( JWT )
    const accessToken = await jwtHelpers.generateAccessToken(userId);
    const refreshToken = await jwtHelpers.generateRefreshToken(userId);

    // Creating the user record ( DOCUMENT )
    const record = await new UserModel({
      phone,
      email,
      name,
      password: hashedPassoword,
      userId,
      status,
      updatedAt,
    });

    // Saving the user record in db
    await record.save();

    // Saving refreshToken in redisDB
    await redisHelpers.SET(userId, refreshToken);

    return { accessToken, refreshToken, userId };
  } catch (err) {
    throw new Error(err);
  }
};

export default registerUserService;
