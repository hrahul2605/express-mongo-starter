import { RequestHandler } from 'express';
import { auth, user } from '../../../services';

interface responseType {
  prettyMessage: string;
  status: number;
  data?: {
    accessToken: string;
    userId: string;
    refreshToken: string;
  };
  success: boolean;
}

const registerController: RequestHandler = async (req, res) => {
  try {
    // Checking if user already exists
    const { found } = await user.findUserService(req.body.phone);

    const userFound: responseType = {
      prettyMessage: 'User already registered.',
      status: 409,
      success: false,
    };

    if (found) {
      res.status(userFound.status);
      res.send(userFound);
      return;
    }

    // Registering new user
    const {
      accessToken,
      userId,
      refreshToken,
    } = await auth.registerUserService(req.body);

    const userCreated: responseType = {
      prettyMessage: 'User registered successfully.',
      status: 201,
      data: {
        userId,
        accessToken,
        refreshToken,
      },
      success: true,
    };

    res.status(userCreated.status);
    res.send(userCreated);
  } catch (err) {
    const response: responseType = {
      prettyMessage: 'Internal Server Error.',
      status: 501,
      success: false,
    };

    res.status(response.status);
    res.send(response);
  }
};

export default registerController;
