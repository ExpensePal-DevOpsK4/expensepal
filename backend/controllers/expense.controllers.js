const expenseService = require("../services/expense.services");

class ExpenseController {
  async addExpense(req, res) {
    try {
      const expenseData = req.body;

      const expense = await expenseService.createExpense(expenseData);

      return res.status(201).json({
        success: true,
        message: "Expense added successfuly",
        data: expense,
      });
    } catch (error) {
      console.error("Error adding expense:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  async getExpenses(req, res) {
    try {
      const expenses = await expenseService.getExpenses();
      return res.status(200).json({
        success: true,
        message: "Expenses retrieved successfuly",
        data: expenses,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateExpense(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const updatedExpense = await expenseService.updateExpense(
        id,
        updatedData
      );
      if (!updatedExpense) {
        return res.status(404).json({ error: "Expense not found" });
      }

      return res.status(200).json({
        success: true,
        message: "Expense updated successfully",
        expense: updatedExpense,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteExpense(req, res) {
    try {
      const expenseId = req.params.id;

      // Call the service to handle the deletion logic
      const expense = await expenseService.deleteExpense(expenseId);

      if (expense.success) {
        return res.status(200).json({
          success: true,
          message: "Expense deleted successfully.",
        });
      }
      return res.status(404).json({ message: "Expense not found." });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error deleting expense.", error: error.message });
    }
  }

  async getGeneralSummary(req, res) {
    try {
      const { startDate, endDate } = req.query; // Get startDate and endDate from query params, if they are provided
      const summary = await getGeneralSummary(startDate, endDate);
      res.status(200).json({
        success: true,
        message: "General spending summary",
        data: summary,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error getting summary", error: err.message });
    }
  }
}

module.exports = new ExpenseController();
