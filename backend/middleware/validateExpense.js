const {expenseSchema, updateExpenseSchema} = require("../validation/expenseValidator");

const validateExpense = (req, res, next) => {
  const { error, value } = expenseSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  req.body = value; // Attach validated data to req.body
  next(); // Pass control to the next middleware or controller
};

const validateUpdateExpense = (req, res, next) => {
    const { error, value } = updateExpenseSchema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  
    req.body = value; // Attach validated data to req.body
    next(); // Pass control to the next middleware or controller
  };

module.exports = {validateExpense, validateUpdateExpense};
