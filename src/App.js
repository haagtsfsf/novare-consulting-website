import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
