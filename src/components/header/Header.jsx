import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Aquí puedes agregar más lógica para procesar los datos del formulario
    // Por ejemplo, enviar a una API o mostrar un mensaje de éxito en la UI
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
            Cansado de Perder Vendas por Falta de{" "}
            <span className={highlightText}>Respostas Rápidas?</span>
          </h1>
          <p className={textStyle}>
            Automatize{" "}
            <span className={highlightTextTwo}>
              Seu Atendimento e Potencialize
            </span>{" "}
            Suas Campanhas de{" "}
            <span className={highlightTextTwo}>Tráfico Pago con la CoAgencia</span>
          </p>
          <p className={textStyle}>
            Cada minuto{" "}
            <span className={highlightText}>
              sin respuesta es una oportunidad perdida
            </span>
            . Con nuestra automatización inteligente, usted garantiza
            <span className={highlightText}> atención 24/7</span>, mientras{" "}
            <span className={highlightText}>
              nuestras estrategias de tráfico pago
            </span>{" "}
            convierten cada clic en una venta.
          </p>
          <form className={formStyle} id="MeuFormulario" onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" className={inputStyle} value={formData.nome} onChange={handleChange} />
            <input type="email" name="email" placeholder="E-mail" className={inputStyle} value={formData.email} onChange={handleChange} />
            <input type="tel" name="telefone" placeholder="Telefone" className={inputStyle} value={formData.telefone} onChange={handleChange} />
            <button type="submit" className={buttonStyle}>Enviar e Conectar con el Agente de IA</button>
          </form>
          <div dangerouslySetInnerHTML={activeCampaignFormHtml} />
        </div>
        <div className={css({ marginLeft: "24px", maxWidth: "600px" })}>
          <img
            src={chatImage}
            alt="Chat Icon"
            className={css({ width: "100%", height: "auto", marginRight: '150px' })}
          />
        </div>
      </div>
    </div>
  );
}
