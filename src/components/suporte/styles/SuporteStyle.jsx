import { css } from "../../../../styled-system/css";


export const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '3rem 5rem',
  width: '100%',
  height: '100vh',
  backgroundColor: '#f5f5f5',
  backgroundImage: 'linear-gradient(135deg, #ffffff 25%, #f0f0f0 25%, #f0f0f0)',

  '@media (max-width: 768px)': {
    flexDirection: 'column', 
    padding: '2rem 1rem',  
    height: 'auto', 
  },
});


export const timelineContainer = css({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '45%',
  gap: '3rem',
  alignItems: 'center', 

  '@media (max-width: 768px)': {
    width: '100%',  
    gap: '2rem',  
  },
});


export const timelineItem = css({
  padding: '1.5rem',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',  
  textAlign: 'center',
  gap: '0.5rem',
  
  '&::before': {
    position: 'absolute',
    top: '-30px', 
    left: '50%',
    transform: 'translateX(-50%)',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid #007bff', 
  },
  
  '&:first-child::before': {
    display: 'none',  
  },

  '@media (max-width: 768px)': {
    padding: '1rem', 
  },
});


export const title = css({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  margin: 0,
  color: '#333',

  '@media (max-width: 768px)': {
    fontSize: '1.3rem', 
  },
});


export const subtitle = css({
  fontSize: '1rem',
  color: '#666',
  margin: 0,

  '@media (max-width: 768px)': {
    fontSize: '0.9rem',  
  },
});


export const timelineLine = css({
  width: '2px',
  height: '3rem',
  backgroundColor: '#007bff',
  margin: '0 auto',

  '@media (max-width: 768px)': {
    height: '2rem', 
  },
});


export const rightContent = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '45%',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    width: '100%',  
    marginTop: '2rem', 
  },
});


export const rightHeading = css({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '1rem',

  '@media (max-width: 768px)': {
    fontSize: '2rem',  
  },
});

export const rightText = css({
  fontSize: '1.2rem',
  color: '#666',
  lineHeight: '1.8',
  marginBottom: '1rem',

  '@media (max-width: 768px)': {
    fontSize: '1rem',  
  },
});


export const ctaButton = css({
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '1rem 2rem',
  fontSize: '1rem',
  borderRadius: '5px',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: '#0056b3',
  },

  '@media (max-width: 768px)': {
    padding: '0.8rem 1.5rem',  
    fontSize: '0.9rem',  
  },
});
