import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Transaction from './Transaction';
const API = process.env.REACT_APP_API_URL;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  console.log(API);
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Date:</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          return (
            <Transaction key={index} transaction={transaction} index={index} />
          );
        })}
      </tbody>
    </table>
  );
};

export default Transactions;
