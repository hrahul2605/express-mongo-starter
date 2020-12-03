import UserModel from '../../models/Users';

interface userModelType {
  userId: string;
  phone: string;
  email: string;
  name: string;
  password: string;
  status: string;
  updatedAt: number;
}

interface findUserPromiseType {
  found?: boolean;
  user?: userModelType;
}

const findUserService = async (phone: string): Promise<findUserPromiseType> => {
  try {
    const match: any = await UserModel.find({ phone });
    if (match.length) {
      return { found: true, user: match[0] };
    }
    return { found: false };
  } catch (err) {
    throw new Error(err);
  }
};

export default findUserService;
