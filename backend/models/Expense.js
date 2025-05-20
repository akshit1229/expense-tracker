const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  description: String,
  expenseDate: Date,
});

module.exports = mongoose.model("Expense", expenseSchema);
