// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
// Other
import './all.css';
import LandingPage from './pages/landing-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <LandingPage />
    </Container>
  </React.StrictMode>
);
