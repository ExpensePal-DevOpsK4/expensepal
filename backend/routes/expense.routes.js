const express = require('express');
const router = express.Router();
const validateExpense = require('../middleware/validateExpense');
const expenseController = require('../controllers/expense.controllers');

router.post('/', validateExpense, expenseController.addExpense);
router.get('/', expenseController.getExpenses);

module.exports = router;
