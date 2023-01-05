import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <nav>
        <h1>
          <Link to="/transactions">Transactions</Link>
        </h1>
        <button>
          <Link to="/transactions/new">Add New Transaction</Link>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
