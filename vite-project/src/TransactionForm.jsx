import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [transaction, setTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      ...transaction,
      id: Date.now(),
      amount: parseFloat(transaction.amount),
    };
    addTransaction(newTransaction);
    setTransaction({ date: "", description: "", category: "", amount: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        placeholder="Date"
        name="date"
        value={transaction.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={transaction.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={transaction.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        name="amount"
        value={transaction.amount}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
