const Expense = require("../models/expense.models");

class ExpenseService {
  // Add new expense
  async createExpense(expenseData) {
    try {
      return await Expense.create(expenseData);
    } catch (error) {
      throw new Error("Error saving expense: " + error.message);
    }
  }

  async getExpenses() {
    try {
      return await Expense.find();
    } catch (error) {
      throw new Error("Error retrieving expenses: " + error.message);
    }
  }
}

module.exports = new ExpenseService();
