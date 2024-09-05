import React, { useState } from "react";
import {
  faqContainer,
  questionButton,
  answerContainer,
  title,
  ctaButton,
} from "./styles/FaqStyle";

const faqData = [
  {
    question: "Como a automação de suporte pode melhorar meu atendimento?",
    answer:
      "Ela permite que você responda a perguntas frequentes de forma rápida e personalizada, 24/7. Isso melhora a experiência do cliente e aumenta as chances de conversão.",
  },
  {
    question: "O tráfego pago realmente gera resultados?",
    answer:
      "Sim, desde que bem gerido. Nosso diferencial é não só trazer leads, mas garantir que eles cheguem à conversão, maximizando o ROI.",
  },
  {
    question: "Como funciona a automação de disparo de mensagens?",
    answer:
      "Enviamos mensagens automáticas em momentos estratégicos da jornada do cliente, garantindo que eles se mantenham engajados até a compra.",
  },
  {
    question: "Essas automações são difíceis de implementar?",
    answer:
      "Não. Nossa equipe cuida de toda a configuração, para que você possa começar a ver os resultados rapidamente.",
  },
  {
    question: "Qual é o diferencial da CoAgência em relação a outras agências?",
    answer:
      "Nós focamos em resultados reais, levando seus leads do primeiro clique até a conversão, enquanto muitas agências apenas gerenciam anúncios sem responsabilidade pelo resultado final.",
  },
  {
    question: "Como posso acompanhar os resultados dessas automações?",
    answer:
      "Fornecemos relatórios detalhados que mostram o impacto direto das automações em suas vendas, facilitando o acompanhamento e a otimização contínua.",
  },
  {
    question: "Essas automações podem ser personalizadas?",
    answer:
      "Sim, cada automação é configurada para atender às necessidades específicas do seu negócio, garantindo que o atendimento e as mensagens reflitam a identidade da sua marca.",
  },
  {
    question:
      "Preciso de suporte contínuo para manter essas automações funcionando?",
    answer:
      "Nosso suporte está sempre disponível para garantir que suas automações funcionem perfeitamente, mas elas são projetadas para operar de forma autônoma, com mínima intervenção.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={faqContainer}>
      <h2 className={title}>Perguntas Frequentes</h2>
      {faqData.map((item, index) => (
        <div key={index}>
          <button
            className={questionButton}
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
          </button>
          {activeIndex === index && (
            <div className={answerContainer}>
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
      <a className={ctaButton} href="MeuFormulario">
        FALE COM NOSSO AGENTE DE IA
      </a>
    </div>
  );
}
