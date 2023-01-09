import React from 'react';
import { Link } from 'react-router-dom';

const Transaction = ({ transaction, index }) => {
  const date = new Date(transaction.date);
  const readableDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(date);

  return (
    <tr>
      <td>{readableDate} </td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
      </td>
      <td>
        ${transaction.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </td>
    </tr>
  );
};

export default Transaction;
