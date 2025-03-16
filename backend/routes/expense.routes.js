const express = require('express');
const router = express.Router();
const validateExpense = require('../middleware/validateExpense');
const expenseController = require('../controllers/expense.controllers');

router.post('/expenses', validateExpense, expenseController.addExpense);

module.exports = router;
