import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './KeyboardComponents/Home';
import Specifications from './KeyboardComponents/Specifications';
import Keyboard from './KeyboardComponents/Keyboard';
import Features from './KeyboardComponents/Features';
import Instructions from './KeyboardComponents/Instructions'; 
import Troubleshooting from './KeyboardComponents/Troubleshooting';
import Maintenance from './KeyboardComponents/Maintenance';
import WarrantySupport from './KeyboardComponents/WarrantySupport';

import './Navbar.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/keyboard" activeClassName="active-link">Keyboard Overview</NavLink>
            </li>
            <li>
              <NavLink to="/specifications" activeClassName="active-link">Specifications</NavLink>
            </li>
            <li>
              <NavLink to="/features" activeClassName="active-link">Features</NavLink>
            </li>
            <li>
              <NavLink to="/setup" activeClassName="active-link">Setup Instructions</NavLink>
            </li>
            <li>
              <NavLink to="/troubleshooting" activeClassName="active-link">Troubleshooting</NavLink>
            </li>
            <li>
              <NavLink to="/maintenance" activeClassName="active-link">Maintenance</NavLink>
            </li>
            <li>
              <NavLink to="/warranty" activeClassName="active-link">Warranty and Support</NavLink>
            </li>
            
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specifications" element={<Specifications />} />
          <Route path="/features" element={<Features />} />
          <Route path="/setup" element={<Instructions />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/warranty" element={<WarrantySupport />} />
          <Route path="/keyboard" element={<Keyboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;