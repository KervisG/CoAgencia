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

  '@media (max-width: 768px)': {
    padding: '1rem',  
    height: 'auto', 
  },
});

export const title = css({
  fontSize: '3.5rem',  
  fontWeight: 'bold',
  marginBottom: '2rem', 
  color: '#ffffff',

  '@media (max-width: 768px)': {
    fontSize: '2.5rem',  
    marginBottom: '1.5rem', 
  },
});

export const description = css({
  fontSize: '1.75rem', 
  lineHeight: '2.2',  
  marginBottom: '3rem', 
  maxWidth: '800px', 
  color: '#ffffff',

  '@media (max-width: 768px)': {
    fontSize: '1.3rem',  
    lineHeight: '1.8',  
    marginBottom: '2rem', 
    maxWidth: '90%',  
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

  '@media (max-width: 768px)': {
    fontSize: '1.2rem',
    padding: '1rem 2rem', 
  },
});
