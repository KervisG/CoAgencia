import React from 'react';

// Componente ScrollLink que maneja el desplazamiento interno
const ScrollLink = ({ children, targetId, className }) => {
  const handleClick = (event) => {
    event.preventDefault();  // Previene la recarga de la página
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ScrollLink;
