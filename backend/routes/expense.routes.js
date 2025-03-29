const express = require('express');
const router = express.Router();
const {validateExpense, validateUpdateExpense} = require('../middleware/validateExpense');
const expenseController = require('../controllers/expense.controllers');

router.post('/', validateExpense, expenseController.addExpense);
router.get('/', expenseController.getExpenses);
router.patch('/:id', validateUpdateExpense ,expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);
router.get('/summarize', expenseController.getGeneralSummary);


module.exports = router;
