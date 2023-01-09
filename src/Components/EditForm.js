import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const EditForm = () => {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
  });
  const textChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((err) => console.log(err));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Edit">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          onChange={textChange}
          placeholder="Enter spending/ income"
          required
        />
        <label htmlFor="amount">Amount :</label>
        <input
          id="amount"
          value={transaction.amount}
          onChange={textChange}
          type="number"
          placeholder="Enter amount"
          required
        />
        <label htmlFor="date">Date :</label>
        <input
          id="date"
          value={transaction.date}
          onChange={textChange}
          type="date"
          required
        />
        <label htmlFor="from">From :</label>
        <input
          id="from"
          value={transaction.from}
          onChange={textChange}
          type="text"
          required
        />
        <label htmlFor="category">Category :</label>
        <input
          id="category"
          value={transaction.category}
          onChange={textChange}
          type="text"
          required
        />
        <Link to={`transactions/${index}`}>
          <input id="submit" type="submit" value="Submit" />
        </Link>
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
};

export default EditForm;
