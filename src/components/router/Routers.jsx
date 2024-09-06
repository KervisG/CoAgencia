import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Anuncios from '../anuncios/Anuncios';
import Automacao from '../automacao/Automacao';
import Suporte from '../suporte/Suporte';
import Campanhas from '../campanhas/Campanhas';
import Motivacao from '../motivacao/Motivacao';
import Reuniao from '../reuniao/Reuniao';
import Faq from '../faq/Faq';
import Footer from '../footer/Footer';
import ThankYouPage from '../thankyoupage/ThankYouPage';  // Página de agradecimiento

function Routers() {
  return (
    <Router>
      {/* Rutas principales */}
      <Routes>
        {/* Página principal que muestra todos los componentes juntos */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Anuncios />
              <Automacao />
              <Suporte />
              <Campanhas />
              <Motivacao />
              <Reuniao />
              <Faq />
              <Footer />
            </>
          } 
        />
        
        {/* Ruta para la página de agradecimiento, mostrada después de llenar el formulario */}
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
