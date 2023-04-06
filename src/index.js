import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import ErrorBoundary from './pages/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accommodation/:id" element={<Accommodation />} />
            <Route path="/*" element={<ErrorBoundary />}/>
          </Routes>
        </Container>
        <Footer />
      </Router>
  </React.StrictMode>
);