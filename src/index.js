import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Router from './router';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Container>
          <Header />
          <Router />
        </Container>
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
);