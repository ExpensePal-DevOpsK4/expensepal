const Joi = require('joi');

const expenseSchema = Joi.object({
  amount: Joi.number().required(),
  category: Joi.string().required(),
  description: Joi.string().optional(),
  paymentMethod: Joi.string().required(),
  date: Joi.date().optional(),
});

module.exports = expenseSchema;