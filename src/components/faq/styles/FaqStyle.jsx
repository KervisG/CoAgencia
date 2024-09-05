import { css } from "../../../../styled-system/css";

export const faqContainer = css({
  width: '100%', 
  padding: '2rem',  
  backgroundColor: '#f0f0f0', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',  
  alignItems: 'center', 
  gap: '1rem', 
  boxSizing: 'border-box',

  '@media (max-width: 768px)': {
    padding: '1rem',  
  },
});

export const title = css({
  fontSize: '2rem',  
  fontWeight: 'bold',
  color: '#333',  
  marginBottom: '1rem',  
  textAlign: 'center',

  '@media (max-width: 768px)': {
    fontSize: '1.75rem',  
  },
});

export const questionButton = css({
  width: '100%',  
  maxWidth: '700px', 
  backgroundColor: '#2382F6', 
  color: '#fff',
  padding: '1rem',  
  fontSize: '1rem',  
  borderRadius: '8px',
  cursor: 'pointer',
  border: 'none',
  textAlign: 'left',
  transition: 'background-color 0.3s, transform 0.2s', 
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  
  margin: '0 auto',  

  '&:hover': {
    backgroundColor: '#1a6ec9',
    transform: 'scale(1.02)', 
  },

  '@media (max-width: 768px)': {
    padding: '0.75rem', 
    fontSize: '0.875rem',  
  },
});

export const answerContainer = css({
  width: '100%', 
  maxWidth: '700px', 
  backgroundColor: '#ffffff', 
  padding: '1rem',  
  borderRadius: '8px',
  marginTop: '0.5rem',
  marginBottom: '1rem',  
  color: '#333',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  
  textAlign: 'left',

  '@media (max-width: 768px)': {
    padding: '0.75rem',  
  },
});

export const ctaButton = css({
  backgroundColor: '#000', 
  color: '#fff',
  padding: '0.8rem 2rem',  
  fontSize: '1rem', 
  borderRadius: '8px',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s, transform 0.2s', 
  marginTop: '1.5rem',  
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 

  '&:hover': {
    backgroundColor: '#333', 
    transform: 'scale(1.05)',  
  },

  '@media (max-width: 768px)': {
    fontSize: '0.875rem',  
    padding: '0.75rem 1.5rem', 
  },
});
