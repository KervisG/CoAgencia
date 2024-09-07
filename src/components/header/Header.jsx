import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "../../../styled-system/css";
import logo from "../../assets/logo_coagencia.png";
import chatImage from "../../assets/logo_chat.png";
import {
  headerStyle,
  contentStyle,
  highlightText,
  formStyle,
  buttonStyle,
  inputStyle,
  textStyle,
  highlightTextTwo
} from "../../styles/HeaderStyle";

// Importar Firestore desde la configuración
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

// Importar react-gtm-module para Google Tag Manager
import TagManager from 'react-gtm-module';

export default function Header() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar que el email sea válido
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      // Enviar datos a Firestore
      await addDoc(collection(db, 'Telefone'), {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone
      });

      // Enviar evento a Google Tag Manager con el evento 'po-fht'
      TagManager.dataLayer({
        dataLayer: {
          event: 'po-fht', // Evento personalizado
          formData: formData // Datos que estás enviando
        }
      });

      console.log('Documento adicionado no Firestore:', formData);
      setError(''); // Limpar qualquer mensagem de erro
      navigate('/thank-you'); // Navegar para a página de agradecimento
    } catch (error) {
      console.error("Erro ao adicionar documento ao Firestore:", error);
      setError('Houve um erro ao enviar os dados. Tente novamente.');
    }
  };

  const activeCampaignFormHtml = {
    __html: `<div class="_form_1"></div><script src="https://coagencia13255.activehosted.com/f/embed.php?id=1" charset="utf-8"></script>`
  };

  return (
    <div className={headerStyle}>
      <div className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
        })}
      >
        <div className={contentStyle}>
          <img
            src={logo}
            alt="Logo CoAgência"
            className={css({ width: "200px", marginBottom: "24px" })}
          />
          <h1 className={css({
            fontSize: "31px",
            fontWeight: "bold",
            marginBottom: "25px",
            maxWidth: "580px",
            lineHeight: "1.2",
          })}>
            Cansado de perder vendas por falta de{" "}
            <span className={highlightText}>respostas rápidas?</span>
          </h1>
          <p className={textStyle}>
            Automatize{" "}
            <span className={highlightTextTwo}>
              seu atendimento e potencialize
            </span>{" "}
            suas campanhas de{" "}
            <span className={highlightTextTwo}>tráfego pago com a CoAgência</span>
          </p>
          <p className={textStyle}>
            Cada minuto{" "}
            <span className={highlightText}>
              sem resposta é uma oportunidade perdida
            </span>
            . Com nossa automação inteligente, você garante
            <span className={highlightText}> atendimento 24/7</span>, enquanto{" "}
            <span className={highlightText}>
              nossas estratégias de tráfego pago
            </span>{" "}
            transformam cada clique em uma venda.
          </p>

          {/* Mostrar mensaje de error si existe */}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {/* Formulario */}
          <form className={formStyle} id="MeuFormulario" onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" className={inputStyle} value={formData.nome} onChange={handleChange} />
            <input type="email" name="email" placeholder="E-mail" className={inputStyle} value={formData.email} onChange={handleChange} />
            <input type="tel" name="telefone" placeholder="Telefone" className={inputStyle} value={formData.telefone} onChange={handleChange} />
            <button type="submit" className={buttonStyle}>Enviar e Conectar com o Agente de IA</button>
          </form>

          {/* Formulário do ActiveCampaign */}
          <div dangerouslySetInnerHTML={activeCampaignFormHtml} />
        </div>
        
        <div className={css({ marginLeft: "24px", maxWidth: "600px" })}>
          <img
            src={chatImage}
            alt="Ícone de Chat"
            className={css({ width: "100%", height: "auto", marginRight: '150px' })}
          />
        </div>
      </div>
    </div>
  );
}
