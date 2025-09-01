import React from 'react';
import './i18n';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Articles from './components/Articles';
import Books from './components/Books';
import Personal from './components/Personal';
import Footer from './components/Footer';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

const App: React.FC = () => (
  <Router>
  <CssBaseline />
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/books" element={<Books />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
