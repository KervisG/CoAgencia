import React from 'react';
import {
  reuniaoContainer,
  title,
  description,
  ctaButton
} from './styles/ReuniaoStyle'; 

export default function Reuniao() {
  return (
    <div className={reuniaoContainer}>
      <h2 className={title}>Vamos Marcar uma Reunião?</h2>
      <p className={description}>
        Nossa automação está pronta para ajudá-lo a marcar uma reunião onde discutiremos as melhores estratégias para o seu negócio. 
        Não perca tempo, agende agora e veja como podemos acelerar suas vendas.
      </p>
      <a className={ctaButton} href='MeuFormulario'>AGENDE SUA REUNIÃO</a>
    </div>
  );
}
