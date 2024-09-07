import React from 'react';
import {
  motivacaoContainer,
  imageContainer,
  textContainer,
  title,
  description,
  ctaButton
} from './styles/MotivacaoStyle'; 
import img from '../../assets/augusto.png'
import ScrollLink from '../ScrollLink';

export default function Motivacao() {
  return (
    <div className={motivacaoContainer}>
      <div className={imageContainer}>
        <img src={img} alt="Persona sonriente" />
      </div>

      <div className={textContainer}>
        <h2 className={title}>Ajudar o Próximo é o Que Nos Motiva</h2>
        <p className={description}>
          Na CoAgência, nossa paixão vai além dos resultados. Acreditamos que a verdadeira satisfação 
          vem de ajudar nossos clientes a alcançarem seus objetivos, seja através de conhecimento, 
          produtos ou serviços.
        </p>
        <p className={description}>
          Se há uma solução que não podemos oferecer, contamos com uma rede de parceiros de confiança 
          para suprir essa necessidade. Estamos aqui para fazer a diferença, guiados por nossos valores e princípios.
        </p>
        <p className={description}>
          A última parceria que você precisará fazer. Com uma taxa de retenção bem acima da média, 
          nossos contratos se estendem por mais de dois anos, garantindo resultados contínuos. Cadastre-se 
          e faça parte dessa história.
        </p>
        <ScrollLink className={ctaButton} targetId="MeuFormulario">JUNTE-SE A NÓS E POTENCIALIZE SEU NEGÓCIO</ScrollLink>
      </div>
    </div>
  );
}
