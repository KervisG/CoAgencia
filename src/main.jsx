import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos Router, Routes, y Route
import './styles/index.css';
import Header from './components/header/Header';
import Anuncios from './components/anuncios/Anuncios';
import Automacao from './components/automacao/Automacao.jsx';
import Campanhas from './components/campanhas/Campanhas.jsx';
import Suporte from './components/suporte/Suporte.jsx';
import Motivacao from './components/motivacao/Motivacao.jsx';
import Reuniao from './components/reuniao/Reuniao.jsx';
import Faq from './components/faq/Faq.jsx';
import Footer from './components/footer/Footer.jsx';
import ThankYouPage from './components/thankyoupage/ThankYouPage.jsx'; // Importamos la página de agradecimiento

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Ruta principal que muestra todo el contenido */}
        <Route path="/" element={
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
        }/>

        {/* Ruta para la página de agradecimiento */}
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
