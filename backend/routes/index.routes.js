const router = require('express').Router();
const expenseRouter = require('./expense.routes');

router.use('/api/expenses', expenseRouter);

module.exports = router;