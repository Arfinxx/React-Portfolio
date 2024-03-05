import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBar/Navbar';
import Home from './components/Pages/Home/home';
import Projects from './components/Pages/Projects/Projects';
import Skills from './components/Pages/Skills/skills';
import About from './components/Pages/AboutMe/About/about';
import Contact from './components/Pages/AboutMe/Contact/contact';

function App() {

  return (
    <Router>
      <NavbarComponent />
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="skills" element={<Skills />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> 
      </Routes>

    </Router>
  )
}

export default App;
