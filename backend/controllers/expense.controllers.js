const expenseService = require("../services/expense.services");

class ExpenseController{
    async addExpense(req, res){
        try{
            const expenseData = req.body;

            const expense = await expenseService.createExpense(expenseData);

            return res.status(201).json({
                message: "Expense added successfuly",
                expense,
            });
        } catch(error){
            return res.status(500).json({error: error.message});
        }
    }
}