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
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["Cash", "Card", "Bank Transfer"],
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
