import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";

const App=()=>{
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("/api/transactions"); 
      if (response.ok) {
        const data = await response.json();
        setTransactions(data);
      } else {
        console.error("Error fetching transactions:", response.status);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Bank Transactions</h1>
      <TransactionForm addTransaction={addTransaction} />
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
};

export default App;

