const Joi = require('joi');

const expenseSchema = Joi.object({
  amount: Joi.number().required(),
  category: Joi.string().required(),
  description: Joi.string().optional(),
  paymentMethod: Joi.string().required(),
  date: Joi.date().optional(),
});

const updateExpenseSchema = Joi.object({
    amount: Joi.number().positive(),
    category: Joi.string(),
    description: Joi.string(),
    paymentMethod: Joi.string(),
    date: Joi.date(),
}).min(1);

module.exports = {expenseSchema, updateExpenseSchema};