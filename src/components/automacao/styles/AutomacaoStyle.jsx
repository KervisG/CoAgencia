import { css } from "../../../../styled-system/css";

export const automacaoContainer = css({
  width: '100vw', 
  height: '100vh', 
  backgroundImage: 'linear-gradient(to right, #0052D4, #4364F7, #6FB1FC)', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: '0 5rem', 
  color: '#fff', 
  textAlign: 'center', 
  overflow: 'hidden',

  '@media (max-width: 1024px)': {  // Ajustes para tablets
    padding: '0 3rem',  
    height: 'auto',  
  },

  '@media (max-width: 768px)': {  // Ajustes para móviles más grandes
    padding: '0 2rem',  
    height: 'auto',  
  },

  '@media (max-width: 480px)': {  // Ajustes para móviles más pequeños como Samsung S8
    padding: '0 1rem',  
  },
});

export const heading = css({
  fontSize: '3.5rem', 
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  letterSpacing: '1.5px', 
  maxWidth: '100%', 
  color: '#FFFFFF',

  '@media (max-width: 1024px)': {  // Ajustes para tablets
    fontSize: '3rem', 
    marginBottom: '1.3rem',  
  },

  '@media (max-width: 768px)': {  // Ajustes para móviles más grandes
    fontSize: '2.5rem', 
    marginBottom: '1rem',  
  },

  '@media (max-width: 480px)': {  // Ajustes para móviles más pequeños como Samsung S8
    fontSize: '2rem', 
    marginBottom: '0.8rem',  
  },
});

export const description = css({
  fontSize: '1.8rem',
  lineHeight: '2',
  maxWidth: '1200px',
  marginBottom: '2.5rem', 
  width: '100%', 
  color: '#f0f0f0',

  '@media (max-width: 1024px)': {  // Ajustes para tablets
    fontSize: '1.5rem',  
    lineHeight: '1.8',  
  },

  '@media (max-width: 768px)': {  // Ajustes para móviles más grandes
    fontSize: '1.2rem',  
    lineHeight: '1.6', 
    marginBottom: '1.5rem', 
  },

  '@media (max-width: 480px)': {  // Ajustes para móviles más pequeños como Samsung S8
    fontSize: '1rem',  
    lineHeight: '1.5', 
    marginBottom: '1.2rem',  
  },
});

export const highlight = css({
  color: '#FFFFFF', 
  fontWeight: 'bold',
});

export const ctaButton = css({
  backgroundColor: '#000', 
  color: '#fff',
  padding: '1.2rem 3rem', 
  fontSize: '1.5rem',
  borderRadius: '10px',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: '#333', 
  },

  '@media (max-width: 1024px)': {  // Ajustes para tablets
    fontSize: '1.4rem', 
    padding: '1.1rem 2.5rem',  
  },

  '@media (max-width: 768px)': {  // Ajustes para móviles más grandes
    fontSize: '1.2rem', 
    padding: '1rem 2rem',  
  },

  '@media (max-width: 480px)': {  // Ajustes para móviles más pequeños como Samsung S8
    fontSize: '1rem',  
    padding: '0.8rem 1.5rem',  
  },
});
