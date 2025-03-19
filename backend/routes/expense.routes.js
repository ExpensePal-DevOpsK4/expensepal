const express = require('express');
const router = express.Router();
const {validateExpense, validateUpdateExpense} = require('../middleware/validateExpense');
const expenseController = require('../controllers/expense.controllers');

router.post('/', validateExpense, expenseController.addExpense);
router.get('/', expenseController.getExpenses);
router.patch('/:id', validateUpdateExpense ,expenseController.updateExpense);


module.exports = router;
