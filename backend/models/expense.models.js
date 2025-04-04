const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
    min: 0, // validation so amount is alwys positive
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Food & Drinks",
      "Transport",
      "Rent & Utilities",
      "Shopping",
      "Health & Medical",
      "Entertainment",
      "Savings & Investments",
      "Education",
      "Debt & Loans",
      "Miscellaneous",
    ],
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
