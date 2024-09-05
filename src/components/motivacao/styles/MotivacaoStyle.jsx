import { css } from "../../../../styled-system/css";

export const motivacaoContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  margin: '0',  
  height: '100vh',  
  maxWidth: '100vw', 
  overflow: 'hidden', 
  boxSizing: 'border-box',  

  '@media (max-width: 768px)': {
    flexDirection: 'column',  
    textAlign: 'center',  
    height: 'auto',  
    padding: '1rem', 
  },
});

export const imageContainer = css({
  width: '45%', 
  textAlign: 'center',
  
  img: {
    borderRadius: '8px',
    maxWidth: '100%', 
    height: 'auto', 
  },

  '@media (max-width: 768px)': {
    width: '100%', 
    marginBottom: '1.5rem', 
  },
});

export const textContainer = css({
  width: '50%', 
  textAlign: 'left',
  paddingLeft: '2rem',

  '@media (max-width: 768px)': {
    width: '100%',
    textAlign: 'center',  
    paddingLeft: '0',  
  },
});

export const title = css({
  fontSize: '2.5rem',  
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#1c1c1e',

  '@media (max-width: 768px)': {
    fontSize: '2rem',
  },
});

export const description = css({
  fontSize: '1.25rem',  
  marginBottom: '1.5rem',
  lineHeight: '1.8',
  color: '#333',

  '@media (max-width: 768px)': {
    fontSize: '1.1rem',  
  },
});

export const ctaButton = css({
  backgroundColor: '#2382F6',
  color: '#fff',
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  borderRadius: '8px',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: '#1a6ec9',
  },

  '@media (max-width: 768px)': {
    fontSize: '1rem', 
    padding: '0.8rem 1.5rem',  
  },
});
