import { RequestHandler } from 'express';
import { auth } from '../../../services';

interface responseType {
  prettyMessage: string;
  status: number;
  success: boolean;
}

const logoutController: RequestHandler = async (req, res) => {
  try {
    const data = {
      accessToken: req.headers['access-token'],
      userId: req.headers['user-id'],
    };

    await auth.logoutUserService(data);

    const response: responseType = {
      prettyMessage: 'Logged out',
      status: 200,
      success: true,
    };

    res.status(response.status);
    res.send(response);
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

export default logoutController;
