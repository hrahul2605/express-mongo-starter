import { RequestHandler } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  phone: Joi.string().length(10).required(), // TODO: Valid only for Indian phn. no.
  email: Joi.string().email(),
  name: Joi.string().required(),
  password: Joi.string().required().min(8),
});

const registerValidate: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req;
    await schema.validateAsync(body);
    next();
  } catch (err) {
    res.status(400);
    res.json({
      prettyMessage: 'Validation Failed.',
      status: 400,
      success: false,
    });
  }
};

export default registerValidate;
