const expenseService = require("../services/expense.services");

class ExpenseController{
    async addExpense(req, res){
        try{
            const expenseData = req.body;

            const expense = await expenseService.createExpense(expenseData);

            return res.status(201).json({
                success: true,
                message: "Expense added successfuly",
                data: expense,
            });
        } catch(error){
            console.error("Error adding expense:", error);
            return res.status(500).json({error: error.message});
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

            const updatedExpense = await expenseService.updateExpense(id, updatedData);
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
}

module.exports = new ExpenseController();