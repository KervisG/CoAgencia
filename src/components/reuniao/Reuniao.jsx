import React from 'react';
import {
  reuniaoContainer,
  title,
  description,
  ctaButton
} from './styles/ReuniaoStyle'; 
import ScrollLink from '../ScrollLink';

export default function Reuniao() {
  return (
    <div className={reuniaoContainer}>
      <h2 className={title}>Vamos Marcar uma Reunião?</h2>
      <p className={description}>
        Nossa automação está pronta para ajudá-lo a marcar uma reunião onde discutiremos las mejores estratégias para su negocio. 
        No pierda tiempo, programe ahora y vea cómo podemos acelerar sus ventas.
      </p>
   
      <ScrollLink targetId="MeuFormulario" className={ctaButton}>
        AGENDE SUA REUNIÃO
      </ScrollLink>
    </div>
  );
}
