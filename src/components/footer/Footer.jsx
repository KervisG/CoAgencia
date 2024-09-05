import React from 'react';
import {
  footerContainer,
  logoContainer,
  textContainer
} from './Styles/FooterStyles';  
import logo from '../../assets/logo_coagencia.png';  

export default function Footer() {
  return (
    <footer className={footerContainer}>
      <div className={logoContainer}>
        <img src={logo} alt="CoAgência de Tráfego" />
      </div>
      <div className={textContainer}>
        <p>Termos de Uso e Política de Privacidade.</p>
      </div>
    </footer>
  );
}
