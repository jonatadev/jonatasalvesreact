import React, { useEffect } from 'react';
import './i18n';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import Books from './components/Books';
import Personal from './components/Personal';
import Footer from './components/Footer';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';



function DocumentTitleUpdater() {
  const location = useLocation();
  useEffect(() => {
    let title = 'Jonatas Alves';
    if (location.pathname === '/' || location.pathname === '/about') {
      title = 'About - Jonatas Alves';
    } else if (location.pathname === '/blog') {
      title = 'Blog - Jonatas Alves';
    } else if (location.pathname === '/books') {
      title = 'Bookworm - Jonatas Alves';
    } else if (location.pathname === '/personal') {
      title = 'Personal - Jonatas Alves';
    }
    document.title = title;
  }, [location]);
  return null;
}

const App: React.FC = () => (
  <Router basename={import.meta.env.BASE_URL}>
    <CssBaseline />
    <DocumentTitleUpdater />
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
