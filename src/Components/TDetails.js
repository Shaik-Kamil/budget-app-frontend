import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

const TDetails = () => {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.error(err));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((res) => {
        navigate('/transactions');
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div>
        <h2>{transaction.item_name}</h2>
        <p>{transaction.amount}</p>
        <p>{transaction.date}</p>
        <p>{transaction.from}</p>
        <p>{transaction.category}</p>
        <br />
      </div>
      <div>
        <Link to={`/transactions`}>
          <button className="btn btn-primary">Back to Transactions</button>
        </Link>
        <Link to={`/transactions/${index}/edit`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TDetails;
