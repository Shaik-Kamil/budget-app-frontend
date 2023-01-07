import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Transaction from './Transaction';
const API = process.env.REACT_APP_API_URL;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function getTotal(nums) {
    let num = 0;
    for (let i of nums) num += Number(i.amount);
    return num.toFixed(2);
  }

  const totalAmount = getTotal(transactions);

  console.log(totalAmount);

  function colorCoding() {
    if (totalAmount > 1000) {
      return (
        <div>
          <h4>
            Total:{' '}
            <span style={{ color: 'green' }}>
              ${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>{' '}
          </h4>
        </div>
      );
    } else if (totalAmount < 1000 && totalAmount > 100) {
      return (
        <div>
          <h4>
            Total:{' '}
            <span style={{ color: 'blue' }}>
              ${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>{' '}
          </h4>
        </div>
      );
    } else if (totalAmount < 0) {
      return (
        <div>
          <h4>
            Total:{' '}
            <span style={{ color: 'red' }}>
              ${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>{' '}
          </h4>
        </div>
      );
    }
  }
  return (
    <div className="table">
      <div className="h3">
        <h3>{colorCoding()}</h3>
      </div>
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
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
