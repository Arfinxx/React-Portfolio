import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './components/navbar/navbar';
import Home from './components/Pages/Home/home';

function App() {

  return (
    <Router>
      <NavbarComponent />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>

    </Router>
  )
}

export default App;
