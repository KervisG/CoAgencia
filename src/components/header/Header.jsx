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

export default function Header() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: 'Visitante', // Valor por defecto
    email: '',
    telefone: '41920012827' // Valor predeterminado del número de WhatsApp
  });

  const handleWhatsAppClick = () => {
    // Redirigir directamente a WhatsApp
    const encodedMessage = encodeURIComponent(
      `Olá, ${formData.nome}! Vi o QRCode da Camiseta no evento do FHT`
    );
    const whatsappLink = `https://wa.me/5541920012827?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
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

          {/* Botón para redirigir a WhatsApp */}
          <button 
            onClick={handleWhatsAppClick} 
            className={buttonStyle} id="MeuFormulario"
          >
           Conectar com o Agente de IA
          </button>

          {/* Formulario comentado */}
          {/*
          <form className={formStyle} id="MeuFormulario" onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" className={inputStyle} value={formData.nome} onChange={handleChange} />
            <input type="email" name="email" placeholder="E-mail" className={inputStyle} value={formData.email} onChange={handleChange} />
            <input type="tel" name="telefone" placeholder="Telefone" className={inputStyle} value={formData.telefone} onChange={handleChange} />
            <button type="submit" className={buttonStyle}>Enviar e Conectar com o Agente de IA</button>
          </form>
          */}

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
