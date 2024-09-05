import { css } from "../../../../styled-system/css";

export const campanhasContainer = css({
  padding: '2rem',
  backgroundColor: '#000',  
  color: 'white',  
  textAlign: 'center',
  margin: '0 auto',
  width: '100%',  
  minHeight: '100vh',  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',  
  alignItems: 'center',

  '@media (max-width: 768px)': {
    padding: '1rem', 
    minHeight: 'auto',  
  },
});

export const destaqueContainer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '3rem',
  maxWidth: '1200px',
  padding: '0 2rem', 
  gap: '2rem',  

  '@media (max-width: 768px)': {
    flexDirection: 'column',  
    gap: '1.5rem',
    padding: '0 1rem', 
  },
});

export const destaqueNumberContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem', 

  '@media (max-width: 768px)': {
    flexDirection: 'row', 
  },
});

export const destaqueNumber = css({
  fontSize: '6rem',  
  fontWeight: 'bold',
  color: '#2382F6',  
  marginBottom: '1rem',  

  '@media (max-width: 768px)': {
    fontSize: '4rem',  
    marginBottom: '0.5rem',  
  },
});

export const destaqueText = css({
  fontSize: '2rem',  
  textTransform: 'uppercase',
  color: '#ffffff',
  fontWeight: 'bold',  
  marginTop: '1rem',

  '@media (max-width: 768px)': {
    fontSize: '1.5rem', 
    marginTop: '0.5rem',  
  },
});

export const textBlock = css({
  textAlign: 'left',
  maxWidth: '500px',  
  padding: '0 1rem',  
  lineHeight: '1.8',  

  '@media (max-width: 768px)': {
    textAlign: 'center',  
    maxWidth: '100%', 
    padding: '0',  
  },

  h3: {
    fontSize: '2.5rem',  
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#ffffff',

    '@media (max-width: 768px)': {
      fontSize: '2rem', 
    },
  },

  p: {
    marginBottom: '1.2rem',
    fontSize: '1.5rem',  
    lineHeight: '1.8',
    color: '#ffffff',

    '@media (max-width: 768px)': {
      fontSize: '1.2rem',  
    },
  },
});
export const ctaButton = css({
  backgroundColor: '#2382F6',
  color: '#fff',
  padding: '1rem 1rem',
  fontSize: '1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  border: 'none',
  position: 'relative',
  top: '20px',
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: '#1a6ec9',
  },


  '@media (max-width: 768px)': {
    fontSize: '0.9rem',  
    padding: '0.6rem 1rem',  
    top: '20px',  
  },

  
  '@media (max-width: 480px)': {
    fontSize: '0.8rem', 
    padding: '0.5rem 0.8rem', 
    top: '10px', 
  },
});



export const integracaoSection = css({
  textAlign: 'center',
  marginTop: '4rem',
  maxWidth: '900px',
  margin: '0 auto',  

  '@media (max-width: 768px)': {
    marginTop: '2rem',  
    padding: '0 1rem', 
  },

  h2: {
    fontSize: '3rem',  
    fontWeight: '900',  
    marginBottom: '1.5rem',
    color: '#ffffff',  
    letterSpacing: '1px',  
    textTransform: 'uppercase',  
    fontFamily: "'Poppins', sans-serif",  

    '@media (max-width: 768px)': {
      fontSize: '2.2rem', 
    },
  },

  p: {
    marginBottom: '1.2rem',
    fontSize: '1.5rem',  
    lineHeight: '2',
    color: '#ffffff',

    '@media (max-width: 768px)': {
      fontSize: '1.2rem', 
    },
  },
});

export const checklistContainer = css({
  display: 'flex',
  justifyContent: 'space-between',  
  alignItems: 'flex-start',
  marginTop: '2rem',
  maxWidth: '700px',
  margin: '0 auto',  
  padding: '0 1rem',  

  '@media (max-width: 768px)': {
    flexDirection: 'column',  
    alignItems: 'center',
    marginTop: '1.5rem',  
  },
});

export const checklistColumn = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',  
  gap: '1rem',

  '@media (max-width: 768px)': {
    alignItems: 'center',  
    width: '100%', 
  },

  li: {
    fontSize: '1.5rem',  
    color: '#ffffff',
    lineHeight: '1.5',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    '@media (max-width: 768px)': {
      fontSize: '1.2rem',  
    },
  },
});

export const largeBoldTitle = css({
  fontSize: '3rem',  
  fontWeight: '900',  
  color: '#ffffff',  
  letterSpacing: '1px',  
  textTransform: 'uppercase',  
  marginBottom: '1.5rem',  
  fontFamily: "'Poppins', sans-serif",  
  textAlign: 'center',  

  '@media (max-width: 768px)': {
    fontSize: '2.5rem', 
  },
});

export const destaqueTitle = css({
  fontSize: '2rem',  
  fontWeight: 'bold',  
  color: '#ffffff',  
  textAlign: 'left',  
  marginBottom: '1rem',  
  lineHeight: '1.4',  
  fontFamily: "'Poppins', sans-serif",  

  '@media (max-width: 768px)': {
    fontSize: '1.6rem', 
    textAlign: 'center', 
  },
});
