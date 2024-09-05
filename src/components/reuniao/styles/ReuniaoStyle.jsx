import { css } from "../../../../styled-system/css";

export const reuniaoContainer = css({
  padding: '2rem',
  backgroundImage: "linear-gradient(135deg, #0062E6, #33AEFF)", 
  borderRadius: '8px',
  textAlign: 'center',
  margin: '0', 
  width: '100vw',  
  height: '100vh',  
  color: 'white',
  display: 'flex',  
  flexDirection: 'column',  
  justifyContent: 'center', 
  alignItems: 'center', 
  boxSizing: 'border-box', 

  '@media (max-width: 768px)': {  // Para móviles y tablets
    padding: '1rem',  
    height: 'auto',  
  },

  '@media (max-width: 480px)': {  // Para móviles más pequeños
    padding: '0.8rem',
  },
});

export const title = css({
  fontSize: '3.5rem',  
  fontWeight: 'bold',
  marginBottom: '2rem', 
  color: '#ffffff',

  '@media (max-width: 768px)': {  // Para móviles y tablets
    fontSize: '2.5rem',  
    marginBottom: '1.5rem', 
  },

  '@media (max-width: 480px)': {  // Para móviles más pequeños
    fontSize: '2rem',
    marginBottom: '1rem',
  },
});

export const description = css({
  fontSize: '1.75rem', 
  lineHeight: '2.2',  
  marginBottom: '3rem', 
  maxWidth: '800px', 
  color: '#ffffff',

  '@media (max-width: 768px)': {  // Para móviles y tablets
    fontSize: '1.3rem',  
    lineHeight: '1.8',  
    marginBottom: '2rem', 
    maxWidth: '90%',  
  },

  '@media (max-width: 480px)': {  // Para móviles más pequeños
    fontSize: '1.1rem',  
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    maxWidth: '85%',
  },
});

export const ctaButton = css({
  backgroundColor: '#000',  
  color: '#fff',
  padding: '1.5rem 3rem',  
  fontSize: '1.5rem', 
  borderRadius: '8px',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: '#333', 
  },

  '@media (max-width: 768px)': {  // Para móviles y tablets
    fontSize: '1.2rem',
    padding: '1rem 2rem', 
  },

  '@media (max-width: 480px)': {  // Para móviles más pequeños
    fontSize: '1rem',
    padding: '0.8rem 1.5rem',
  },
});
