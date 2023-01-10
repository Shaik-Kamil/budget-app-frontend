//! Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

//? Pages
import Mode from './Components/Mode';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Show from './Pages/Show';
import Index from './Pages/Index';
import New from './Pages/New';
import Edit from './Pages/Edit';
import Error from './Pages/Error';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Budget Tracker</title>
          <link rel="canonical" href="http://mysite.com/example"></link>
          <meta name="description" content="Budget App"></meta>
        </Helmet>
      </HelmetProvider>
      <Router>
        <Nav />

        <main>
          <Mode theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
