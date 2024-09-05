import { css } from "../../styled-system/css";

export const headerStyle = css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '16px 32px',
    color: 'white',
    minHeight: '100vh', 
    background: "linear-gradient(135deg, #000000 30%, #0a0a1a 60%, #001a33 100%)",
    
    '@media (max-width: 768px)': {
        flexDirection: 'column',  
        padding: '16px',
        height: 'auto',
    }
});

export const contentStyle = css({
    maxWidth: "28rem",
    textAlign: "left",
    marginLeft: '80px',

    '@media (max-width: 768px)': {
        marginLeft: '0px',      
        width: '100%',           
        textAlign: 'center',      
        marginBottom: '24px',    
    }
});

export const titleStyle = css({
    fontSize: "2.25rem",
    fontWeight: "bold",
    marginBottom: "24px",
    maxWidth: "500px",  
    lineHeight: "1.2",  

    '@media (max-width: 768px)': {
        fontSize: '1.75rem',   
        maxWidth: '100%', 
        textAlign: 'center', 
    }
});

export const highlightText = css({
    color: "#2382F6",  
});

export const highlightTextTwo = css({
    color: "#ffffff", 
    background: "#2382F6", 
    padding: "4px 8px", 
    borderRadius: "4px",  
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)", 
});


export const formStyle = css({
    marginTop: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'stretch',

    '@media (max-width: 768px)': {
        width: '100%',       
    }
});

export const inputStyle = css({
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #2a5298', 
    backgroundColor: '#1e3c72',   
    color: 'white',           
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s', 

    '&::placeholder': {
        color: '#b0c4de',  
        opacity: 1,        
    },

    '&:focus': {
        borderColor: '#58a6ff',  
        boxShadow: '0 0 10px rgba(88, 166, 255, 0.5)', 
    },

    '@media (max-width: 768px)': {
        fontSize: '0.875rem',    
        padding: '10px',         
    }
});

export const buttonStyle = css({
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 16px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '16px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '100%',

    '@media (max-width: 768px)': {
        padding: '10px',       
        fontSize: '0.875rem', 
    }
});

export const textStyle = css({
    fontSize: '1rem',
    lineHeight: '1.6',  
    color: '#ffffff', 
    marginBottom: '16px', 

    '@media (max-width: 768px)': {
        fontSize: '0.875rem',  
        textAlign: 'center', 
    }
});
