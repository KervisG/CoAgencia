import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Header from './components/header/Header'
import Anuncios from './components/anuncios/Anuncios'
import Automacao from './components/automacao/Automacao.jsx'
import Campanhas from './components/campanhas/Campanhas.jsx'
import Suporte from './components/suporte/Suporte.jsx'
import Motivacao from './components/motivacao/Motivacao.jsx'
import Reuniao from './components/reuniao/Reuniao.jsx'
 import Faq from './components/faq/Faq.jsx'
 import Footer from './components/footer/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  <Anuncios></Anuncios>
 <Automacao></Automacao>
 <Suporte></Suporte>
<Campanhas></Campanhas>
<Motivacao></Motivacao>
<Reuniao></Reuniao>
<Faq></Faq>
<Footer></Footer>
  </StrictMode>,
)
