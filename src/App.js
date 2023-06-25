import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/app.css';
import Background from './components/Background';
import Player from './components/Player';

const App = () => {
  return (
    <Router>
      <Nav/>
      <Background/>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Player/>
    </Router>
  )
}

export default App



