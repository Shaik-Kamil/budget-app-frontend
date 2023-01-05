//! Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//? Pages
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Show from './Pages/Show';
import Index from './Pages/Index';
import New from './Pages/New';
import Edit from './Pages/Edit';
import Error from './Pages/Error';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
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
