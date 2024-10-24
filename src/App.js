import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route path="design" element={<ServiceDetail service="Design" />} />
          <Route path="development" element={<ServiceDetail service="Development" />} />
          <Route path="consulting" element={<ServiceDetail service="Consulting" />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
