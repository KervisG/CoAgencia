import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import ThankYouPage from '../thankyoupage/ThankYouPage';  // Página de agradecimiento

function Routers() {
  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<Header />} />
        
    
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
