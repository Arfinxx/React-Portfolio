import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBar/Navbar';
import Home from './components/Pages/Home/home';
import Projects from './components/Pages/Projects/Projects';
import Skills from './components/Pages/Skills/skills';

function App() {

  return (
    <Router>
      <NavbarComponent />
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="skills" element={<Skills />} />
      </Routes>
      <script src="https://kit.fontawesome.com/bbd1d234aa.js" crossorigin="anonymous"></script>

    </Router>
  )
}

export default App;
