import { RequestHandler } from 'express';

import { auth } from '../../../services';

interface responseType {
  prettyMessage: string;
  status: number;
  data?: {
    accessToken: string;
    userId: any;
    refreshToken: string;
  };
  success: boolean;
  message?: string;
}

const refreshTokenController: RequestHandler = async (req, res) => {
  try {
    const data = {
      refreshToken: req.body.refreshToken,
      accessToken: req.headers['access-token'],
      userId: req.headers['user-id'],
    };
    const { expired, match, tokens } = await auth.refreshTokenService(data);

    if (expired) {
      const expiredResponse: responseType = {
        prettyMessage: 'Please log in again',
        status: 405,
        success: false,
      };
      res.status(expiredResponse.status);
      res.send(expiredResponse);
      return;
    }

    if (!match) {
      const badRequest: responseType = {
        prettyMessage: 'Invalid',
        status: 400,
        success: false,
      };
      res.status(badRequest.status);
      res.send(badRequest);
      return;
    }
    const successResponse: responseType = {
      prettyMessage: 'OK',
      status: 205,
      success: true,
      data: {
        accessToken: tokens!.accessToken!,
        refreshToken: tokens!.refreshToken!,
        userId: data.userId,
      },
    };
    res.status(successResponse.status);
    res.send(successResponse);
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

export default refreshTokenController;
