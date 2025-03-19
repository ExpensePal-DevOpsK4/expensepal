const router = require('express').Router();
const expenseRouter = require('./expense.routes');

router.use('/expenses', expenseRouter);

module.exports = router;