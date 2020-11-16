import { RequestHandler } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  phone: Joi.string().length(10).required(), // TODO: Valid only for Indian phn. no.
  email: Joi.string().email(),
  name: Joi.string().required(),
  password: Joi.string().required().min(8),
});

const headerSchema = Joi.object({
  'content-type': Joi.equal('application/json').required(),
}).unknown(true);

const registerValidate: RequestHandler = async (req, res, next) => {
  try {
    const { body, headers } = req;
    await headerSchema.validateAsync(headers);
    await schema.validateAsync(body);
    next();
  } catch (err) {
    res.status(400);
    res.json({
      prettyMessage: 'Registration Credentials not valid.',
      status: 400,
      success: false,
    });
  }
};

export default registerValidate;
