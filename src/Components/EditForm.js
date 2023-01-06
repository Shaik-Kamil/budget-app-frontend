import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const EditForm = () => {
  let { index } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
  });
  const textChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {})
      .catch((err) => console.log(err));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, data)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item Name:</label>
        <input
          id="item"
          type="text"
          value={data.item_name}
          onChange={textChange}
          placeholder="Enter spending/ income"
          required
        />
        <label htmlFor="amount">Amount :</label>
        <input
          id="amount"
          value={data.amount}
          onChange={textChange}
          type="number"
          placeholder="Enter amount"
          required
        />
        <label htmlFor="date">Date :</label>
        <input
          id="date"
          value={data.date}
          onChange={textChange}
          type="date"
          placeholder="MM/DD/YYYY"
          required
        />
        <label htmlFor="from">From :</label>
        <input
          id="from"
          value={data.from}
          onChange={textChange}
          type="text"
          required
        />
        <label htmlFor="category">Category :</label>
        <input
          id="category"
          value={data.category}
          onChange={textChange}
          type="text"
          required
        />
        <input type="submit" value="Submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
};

export default EditForm;
