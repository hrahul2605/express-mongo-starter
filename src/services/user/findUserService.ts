import UserModel from '../../models/Users';

interface findUserPromiseType {
  found?: boolean;
  user?: object;
}

const findUserService = async (phone: string) => {
  try {
    const match = await UserModel.find({ phone });
    if (match.length) {
      return new Promise<findUserPromiseType>((resolve) =>
        resolve({ found: true, user: match[0] }),
      );
    }
    return new Promise<findUserPromiseType>((resolve) =>
      resolve({ found: false }),
    );
  } catch (err) {
    return new Promise<findUserPromiseType>((_, reject) => reject(err));
  }
};

export default findUserService;
