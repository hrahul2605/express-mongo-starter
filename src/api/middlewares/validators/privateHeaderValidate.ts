// Checks if header is valid for protected routes
import { RequestHandler } from 'express';
import Joi from 'joi';

const headerSchema = Joi.object({
  'content-type': Joi.equal('application/json').required(),
  'access-token': Joi.string().required(),
  'user-id': Joi.string().required(),
}).unknown(true);

const privateHeaderValidate: RequestHandler = async (req, res, next) => {
  try {
    await headerSchema.validateAsync(req.headers);
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

export default privateHeaderValidate;
