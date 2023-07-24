import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, date, description, category, amount }) => (
          <tr key={id}>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;
