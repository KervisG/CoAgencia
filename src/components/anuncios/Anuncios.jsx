import React from 'react';
import {
  anunciosContainer, 
  heading,
  description,
  highlight,
  featuresContainer,
  featureBox,
  iconStyle,
  ctaContainer,
  checklist,
  checklistItem,
  ctaText,
  ctaButton,
  checklistColumn,
} from './styles/Style'; 
import imgcash from '../../assets/money.png';
import imgclock from '../../assets/clock.png';
import imgads from '../../assets/ads.png';

export default function Anuncios() {
  return (
    <div className={anunciosContainer} >
      <h2 className={heading}>
        Você Está Tirando o Máximo Proveito de Seus Anúncios?
      </h2>
      <p className={description}>
        Anúncios podem gerar tráfego, mas <span className={highlight}>estão convertendo?</span> 
        Na CoAgência, garantimos que cada centavo investido em anúncios 
        <span className={highlight}> retorne em vendas</span>, através de estratégias que atraem, engajam e convertem.
      </p>

      <div className={featuresContainer}>
        <div className={featureBox}>
          <img src={imgclock} alt="Icono de Automação" className={iconStyle}/>
          <h3>Atendimento Automatizado</h3>
          <p>Suporte disponível a qualquer hora, sem perda de leads.</p>
        </div>

        <div className={featureBox}>
          <img src={imgads} alt="Icono de Eficiência" className={iconStyle}/>
          <h3>Campanhas Eficientes</h3>
          <p>Otimizamos seus anúncios para resultados reais, não apenas cliques.</p>
        </div>

        <div className={featureBox}>
          <img src={imgcash} alt="Icono de Integração" className={iconStyle}/>
          <h3>Integração Perfeita</h3>
          <p>Nossas soluções trabalham juntas para maximizar suas vendas.</p>
        </div>
      </div>

      <div className={ctaContainer}>
        <div className={checklistColumn}>
          <ul className={checklist}>
            <li className={checklistItem}>
              <span>✔</span> Cliques sem Conversão? <span className={highlight}>Nós resolvemos.</span>
            </li>
            <li className={checklistItem}>
              <span>✔</span> Poucas Vendas? <span className={highlight}>Aumentamos seu ROI.</span>
            </li>
          </ul>
        </div>

        <div className={checklistColumn}>
          <ul className={checklist}>
            <li className={checklistItem}>
              <span>✔</span> Leads Caros? <span className={highlight}>Reduzimos o custo.</span>
            </li>
            <li className={checklistItem}>
              <span>✔</span> Atendimento demorado? <span className={highlight}>Automatizamos.</span>
            </li>
          </ul>
        </div>
      </div>

      <p className={ctaText}>
        Pronto para ver resultados reais? Cadastre-se agora e veja como nossas campanhas podem transformar cliques em vendas.
      </p>

      <a className={ctaButton} href='MeuFormulario'>DESCUBRA COMO MELHORAR SUAS CAMPANHAS</a>
    </div>
  );
}
