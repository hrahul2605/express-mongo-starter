import { RequestHandler } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  phone: Joi.string().length(10).required(), // TODO: Valid only for Indian phn. no.
  password: Joi.string().required(),
});

const loginValidate: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req;
    await schema.validateAsync(body);
    next();
  } catch (err) {
    res.status(400);
    res.json({
      prettyMessage: 'Login Credentials not valid.',
      status: 400,
      success: false,
    });
  }
};

export default loginValidate;
