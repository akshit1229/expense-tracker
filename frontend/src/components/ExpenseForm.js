import React, { useState } from "react";
import axios from "axios";

const ExpenseForm = () => {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    description: "",
    expenseDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/expenses", form);
      alert("Expense added!");
      setForm({ amount: "", category: "", description: "", expenseDate: "" });
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} required /><br />
      <select name="category" value={form.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
      </select><br />
      <input name="description" type="text" placeholder="Description" value={form.description} onChange={handleChange} required /><br />
      <input name="expenseDate" type="date" value={form.expenseDate} onChange={handleChange} required /><br />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
