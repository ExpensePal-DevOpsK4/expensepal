const expenseService = require("../services/expense.services");

class ExpenseController{
    async addExpense(req, res){
        try{
            const expenseData = req.body;

            const expense = await expenseService.createExpense(expenseData);

            return res.status(201).json({
                success: "true",
                message: "Expense added successfuly",
                data: expense,
            });
        } catch(error){
            console.error("Error adding expense:", error);
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = new ExpenseController();