import React from 'react';
import {
  automacaoContainer, 
  heading, 
  description, 
  highlight, 
  ctaButton
} from './styles/AutomacaoStyle';

export default function Automacao() {
  return (
    <div className={automacaoContainer}>
      <h2 className={heading}>
        Automação Que Trabalha Para Você, Não Contra Você
      </h2>
      <p className={description}>
        Esqueça a ideia de que <span className={highlight}>automação é fria e impessoal.</span> Nossa tecnologia é projetada para fornecer respostas que <span className={highlight}>parecem humanas</span>, enquanto você foca em crescer seu negócio. E o melhor: ela nunca dorme, nunca para, e sempre converte.
      </p>
      <a className={ctaButton} href='MeuFormulario'>EXPERIMENTE NOSSA AUTOMAÇÃO INTELIGENTE</a>
    </div>
  );
}
