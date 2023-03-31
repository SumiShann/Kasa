import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Container from './components/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/accommodation/:id" element={<Accommodation />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </Container>
      </Router>
  </React.StrictMode>
);