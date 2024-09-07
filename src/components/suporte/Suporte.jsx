import React from 'react';
import {
  container,
  timelineContainer,
  timelineItem,
  title,
  subtitle,
  rightContent,
  ctaButton,
  rightHeading,
  rightText,
} from './styles/SuporteStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono de la flecha
import ScrollLink from '../ScrollLink';


export default function Soporte() {
  return (
    <div className={container}>
      <div className={timelineContainer}>
        <div className={timelineItem}>
          <h3 className={title}>Recebimento da Pergunta:</h3>
          <p className={subtitle}>Cliente envia uma dúvida.</p>
        </div>
        <FontAwesomeIcon icon={faArrowDown} size="2x" color="#007bff" /> {/* Flecha */}
        <div className={timelineItem}>
          <h3 className={title}>Análise e Resposta:</h3>
          <p className={subtitle}>A IA processa e responde instantaneamente.</p>
        </div>
        <FontAwesomeIcon icon={faArrowDown} size="2x" color="#007bff" /> {/* Flecha */}
        <div className={timelineItem}>
          <h3 className={title}>Conversão:</h3>
          <p className={subtitle}>
            Cliente satisfeito, pronto para participar do evento ou comprar.
          </p>
        </div>
      </div>
      <div className={rightContent}>
        <h2 className={rightHeading}>Suporte Imediato, Mesmo Fora do Horário Comercial</h2>
        <p className={rightText}>
          Nossa automação de atendimento não apenas responde; <strong>ela entende e se adapta ao seu cliente.</strong>
        </p>
        <p className={rightText}>
          Com <strong>inteligência artificial avançada</strong>, oferecemos respostas rápidas e personalizadas que mantêm seu público engajado, enquanto você dorme tranquilo.
        </p>
        <ScrollLink className={ctaButton} targetId="MeuFormulario">OTIMIZE AGORA E CONVERTA MAIS</ScrollLink>
      </div>
    </div>
  );
}
