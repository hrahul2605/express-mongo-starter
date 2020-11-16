import { RequestHandler } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  phone: Joi.string().length(10).required(), // TODO: Valid only for Indian phn. no.
  password: Joi.string().required(),
});

const headerSchema = Joi.object({
  'content-type': Joi.equal('application/json').required(),
}).unknown(true);

const loginValidate: RequestHandler = async (req, res, next) => {
  try {
    const { body, headers } = req;
    await headerSchema.validateAsync(headers);
    await schema.validateAsync(body);
    next();
  } catch (err) {
    res.status(400);
    res.json({
      prettyMessage: 'Bad Request',
      status: 400,
      success: false,
    });
  }
};

export default loginValidate;
