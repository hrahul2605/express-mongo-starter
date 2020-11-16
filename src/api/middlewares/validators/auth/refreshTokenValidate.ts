// Checks if header & body is valid
import { RequestHandler } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  refreshToken: Joi.string().required(),
});

const refreshTokenValidate: RequestHandler = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    res.status(400);
    res.json({
      message: 'Bad Request',
      status: 400,
      success: false,
    });
  }
};

export default refreshTokenValidate;
