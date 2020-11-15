import bcrypt from 'bcrypt';
import config from '../../config';

// Models
import UserModel from '../../models/Users';

// Helpers
import generateJwt from '../../helpers/generateJwt';

interface RegisterParamType {
  phone: string;
  email: string;
  name: string;
  password: string;
}
interface RegisterPromiseType {
  accessToken: string;
  userId: string;
}

const registerUserService = async (data: RegisterParamType) => {
  try {
    const { phone, email, name, password } = data;
    const userId: string = `DRIP${phone}USER`;
    const status: string = 'PENDING';
    const updatedAt: number = Date.now();

    // Generating Password Hash
    const hashedPassoword = await bcrypt.hash(
      password,
      parseInt(config.BCRYPT_SALT_ROUNDS!, 10),
    );
    // Generating access token ( JWT )
    const accessToken = generateJwt(userId);

    // Creating the user record ( DOCUMENT )
    const record = await new UserModel({
      phone,
      email,
      name,
      password: hashedPassoword,
      userId,
      status,
      updatedAt,
      accessToken,
    });

    // Saving the user record in db
    await record.save();

    return new Promise<RegisterPromiseType>((resolve) =>
      resolve({ accessToken, userId }),
    );
  } catch (err) {
    return new Promise<RegisterPromiseType>((_, reject) => reject(err));
  }
};

export default registerUserService;
