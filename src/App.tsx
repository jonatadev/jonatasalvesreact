import React from 'react';
import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
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
    <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
      <Route path="/books" element={<Books />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
