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

  async updateExpense(id, updateData) {
    try {
      return await Expense.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true }
      );
    } catch (error) {
      throw new Error("Error editing expense: " + error.message);
    }
  }

  async deleteExpense(expenseId){
    try {
      // Attempt to delete the expense by its ID
      const deletedExpense = await Expense.findByIdAndDelete(expenseId);
  
      // Check if the expense was found and deleted
      if (!deletedExpense) {
        return { success: false };
      }
  
      return { success: true };
    } catch (error) {
      throw new Error("Error deleting expense: " + error.message);
    }
  }
}

module.exports = new ExpenseService();
