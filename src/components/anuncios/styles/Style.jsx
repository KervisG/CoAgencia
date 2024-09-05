import { css } from "../../../../styled-system/css";

export const anunciosContainer = css({
  padding: '2rem',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
  borderRadius: '8px',
  margin: '0 auto',
  
  '@media (max-width: 768px)': {
    padding: '1rem', 
  },
});

export const heading = css({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '2rem',  
    marginBottom: '1.5rem',
  },
});

export const description = css({
  fontSize: '1.4rem',
  lineHeight: '1.8',
  marginBottom: '3rem', 
  color: '#333',

  '@media (max-width: 768px)': {
    fontSize: '1.2rem', 
    marginBottom: '2rem',
  },
});

export const highlight = css({
  color: '#007bff',
  fontWeight: 'bold',
});

export const featuresContainer = css({
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '3rem',
  gap: '2rem',

  '@media (max-width: 768px)': {
    flexDirection: 'column', 
    alignItems: 'center',  
    gap: '1.5rem',
  },
});

export const featureBox = css({
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: '2rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  textAlign: 'center',
  width: '30%', 
  transition: 'transform 0.3s ease',
  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  '&:hover': {
    transform: 'scale(1.05)',
  },

  '@media (max-width: 768px)': {
    width: '80%',
    padding: '1.5rem',  
  },
});

export const iconStyle = css({
  width: '90px',
  height: '90px',
  marginBottom: '1.5rem',
  left: '10px',
  position: 'absolute',
  top: '-45px',  
  backgroundColor: '#007bff',
  padding: '1rem',
  borderRadius: '60%',
  boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',

  '@media (max-width: 768px)': {
    width: '70px', 
    height: '70px',
  },
});

export const ctaContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',
  margin: '0 auto',
  marginBottom: '3rem',

  '@media (max-width: 768px)': {
    flexDirection: 'column',  
    width: '100%', 
  },
});

export const checklistColumn = css({
  width: '45%',

  '@media (max-width: 768px)': {
    width: '100%', 
    marginBottom: '1.5rem',
  },
});

export const checklist = css({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

export const checklistItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  color: '#007bff',

  '@media (max-width: 768px)': {
    fontSize: '1rem',  
    marginBottom: '1rem',
  },
});

export const ctaText = css({
  marginTop: '1.5rem',
  fontSize: '1.3rem',
  color: '#333',

  '@media (max-width: 768px)': {
    fontSize: '1.1rem',  
  },
});

export const ctaButton = css({
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '1rem 3rem',
  fontSize: '1.2rem',
  borderRadius: '5px',
  cursor: 'pointer',
  border: 'none',
  width: 'auto',
  margin: '0 auto',
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: '#0056b3',
  },

  '@media (max-width: 768px)': {
    fontSize: '1rem',  
    padding: '0.75rem 2rem',  
  },
});
