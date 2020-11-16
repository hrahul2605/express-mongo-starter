import { RequestHandler } from 'express';
import { auth } from '../../../services';

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

const loginController: RequestHandler = async (req, res) => {
  try {
    const { found, authorised, data } = await auth.loginUserService(req.body);
    if (!found) {
      const notFound: responseType = {
        prettyMessage: 'User not registered.',
        status: 401,
        success: false,
      };
      res.status(notFound.status);
      res.send(notFound);
      return;
    }
    if (found && !authorised) {
      const notAuthorised: responseType = {
        prettyMessage: 'User not Authorised.',
        status: 401,
        success: false,
      };
      res.status(notAuthorised.status);
      res.send(notAuthorised);
      return;
    }

    const authorisedResponse: responseType = {
      prettyMessage: 'User Authorised.',
      status: 200,
      success: false,
      data,
    };
    res.status(authorisedResponse.status);
    res.send(authorisedResponse);
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

export default loginController;
