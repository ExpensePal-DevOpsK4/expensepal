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

  async deleteExpense(expenseId) {
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

  // General spending summary
  async getGeneralSummary() {
    try {
      // Aggregate total spending, total number of expenses, and average expense
      const result = await Expense.aggregate([
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$amount" },
            totalCount: { $sum: 1 },
            averageAmount: { $avg: "$amount" },
          },
        },
      ]);

      // Aggregate spending by category
      const categorySummary = await Expense.aggregate([
        { $group: { _id: "$category", totalAmount: { $sum: "$amount" } } },
        { $sort: { totalAmount: -1 } }, // Sort by highest spending
      ]);

      // Combine results
      const generalSummary = {
        totalSpending: result[0]?.totalAmount || 0,
        totalExpenses: result[0]?.totalCount || 0,
        averageExpense: result[0]?.averageAmount || 0,
        spendingByCategory: categorySummary,
      };

      return generalSummary;
    } catch (err) {
      throw new Error("Error getting general spending summary: " + err.message);
    }
  }
}

module.exports = new ExpenseService();
