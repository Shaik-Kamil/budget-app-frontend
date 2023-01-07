import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const NewForm = () => {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
  });
  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate('/transactions');
      })
      .catch((err) => console.error());
  };
  return (
    <div className="New">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          onChange={handleTextChange}
          placeholder="Enter spending/ income"
          required
        />
        <label htmlFor="amount">Amount :</label>
        <input
          id="amount"
          value={transaction.amount}
          onChange={handleTextChange}
          type="number"
          placeholder="Enter amount"
          required
        />
        <label htmlFor="date">Date :</label>
        <input
          id="date"
          value={transaction.date}
          onChange={handleTextChange}
          type="date"
          placeholder="MM/DD/YYYY"
          required
        />
        <label htmlFor="from">From :</label>
        <input
          id="from"
          value={transaction.from}
          onChange={handleTextChange}
          type="text"
          required
        />
        <label htmlFor="category">Category :</label>
        <input
          id="category"
          value={transaction.category}
          onChange={handleTextChange}
          type="text"
          required
        />
        <input type="submit" value="Submit" />
      </form>
      <Link to={`/transactions/`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
};

export default NewForm;
