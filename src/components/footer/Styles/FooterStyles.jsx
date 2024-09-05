import { css } from "../../../../styled-system/css";

export const footerContainer = css({
  backgroundColor: '#000',  
  color: '#fff', 
  padding: '2rem',
  textAlign: 'center',
  borderTop: '1px solid #333',  
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

export const logoContainer = css({
  marginBottom: '1rem',
  display: 'flex',  
  justifyContent: 'center',

  img: {
    width: '200px',  
    height: 'auto',

    '@media (max-width: 768px)': {
      width: '150px',  
    },
  },
});

export const textContainer = css({
  fontSize: '0.875rem',  
  color: '#bbb', 
  textAlign: 'center',  
  maxWidth: '600px',  

  '@media (max-width: 768px)': {
    fontSize: '0.75rem',  
    maxWidth: '100%',  
    padding: '0 1rem', 
  },
});
