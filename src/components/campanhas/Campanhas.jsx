import React from "react";
import CountUp from "react-countup";
import {
  campanhasContainer,
  destaqueContainer,
  destaqueNumberContainer,
  destaqueNumber,
  destaqueText,
  textBlock,
  ctaButton,
  integracaoSection,
  checklistContainer,
  checklistColumn,
  largeBoldTitle, 
  destaqueTitle,
} from "./styles/CampanhasStyle";
import ScrollLink from '../scrolllink';

export default function Campanhas() {
  return (
    <div className={campanhasContainer}>
      {/* Sección de Aumento de Conversão */}
      <div className={destaqueContainer}>
        <div>
          <div className={destaqueNumberContainer}>
            <span className={destaqueNumber}>+</span>
            <CountUp
              start={0}
              end={30}
              duration={3}
              suffix="%"
              className={destaqueNumber}
            />
          </div>
          <p className={destaqueText}>AUMENTO DE CONVERSÃO</p>
        </div>
        <div>
          <div className={destaqueNumberContainer}>
            <span className={destaqueNumber}>-</span>
            <CountUp
              start={0}
              end={20}
              duration={3}
              suffix="%"
              className={destaqueNumber}
            />
          </div>
          <p className={destaqueText}>CUSTO POR LEAD</p>
        </div>
        <div className={textBlock}>
          <h3 className={destaqueTitle}>
            Transforme Cliques em Clientes com Nossas Campanhas
          </h3>
          <p>
            Não basta ter tráfego, é preciso convertê-lo. Com a CoAgência, você
            obtém mais do que cliques. Nossas campanhas são otimizadas para
            atrair o público certo e converter visitas em vendas.
          </p>
          <p>
            Está pronto para ver suas vendas crescerem? Cadastre-se agora e
            descubra o poder do tráfego pago aliado ao nosso autoatendimento.
          </p>
          <ScrollLink className={ctaButton} targetId="MeuFormulario">
            CONHEÇA NOSSAS ESTRATÉGIAS DE TRÁFEGO PAGO
          </ScrollLink>
        </div>
      </div>

      {/* Sección de O Poder da Integração */}
      <div className={integracaoSection}>
        <h2 className={largeBoldTitle}>
          O Poder da Integração: Automação + Tráfego Pago
        </h2>
        <p>
          Quando sua automação de atendimento e tráfego pago trabalham juntos,
          os resultados são potencializados.
        </p>
        <p>
          Imagine campanhas onde cada lead gerado por um anúncio é imediatamente
          engajado por uma automação personalizada. Isso é mais que eficiência,
          é uma máquina de vendas.
        </p>

        {/* Checklist dividido en dos columnas */}
        <div className={checklistContainer}>
          <ul className={checklistColumn}>
            <li>✔ Resposta Instantânea a Novos Leads</li>
            <li>✔ Personalização em Massa</li>
          </ul>

          <ul className={checklistColumn}>
            <li>✔ Aumento das Taxas de Conversão</li>
            <li>✔ Trabalha 24/7</li>
          </ul>
        </div>

        <ScrollLink className={ctaButton} targetId="MeuFormulario">
          VEJA COMO INTEGRAMOS SUAS SOLUÇÕES
        </ScrollLink>
      </div>
    </div>
  );
}
