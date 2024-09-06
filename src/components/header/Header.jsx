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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de datos, como una llamada a una API
    setIsSubmitted(true);
  };

  return (
    <div className={headerStyle}>
      <div
        className={css({
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

          {!isSubmitted ? (
            <>
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
                <span className={highlightTextTwo}>Tráfego Pago com a CoAgência</span>
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
                convertem cada clique em uma venda.
              </p> 
              <form className={formStyle} onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" className={inputStyle} />
                <input type="email" placeholder="E-mail" className={inputStyle} />
                <input type="tel" placeholder="Telefone" className={inputStyle} />
                <label
                  className={css({
                    display: "flex",
                    alignItems: "start",
                    gap: "8px",
                  })}
                >
                  <span className={css({ fontSize: "0.875rem" })}>
                    Ao enviar este formulário, você concorda com nossos termos de
                    uso e políticas de privacidade, conforme regulamentado pela
                    LGPD.
                  </span>
                </label>
                <button type="submit" className={buttonStyle}>
                  Enviar e Conectar com o Agente de IA
                </button>
              </form>
            </>
          ) : (
            <div className={css({ textAlign: "center", color: "white" })}>
              <h2 className={css({ fontSize: "24px", fontWeight: "bold" })}>
                Obrigado por enviar suas informações!
              </h2>
              <p className={css({ marginTop: "16px", fontSize: "18px" })}>
                Em breve entraremos em contato para continuar o processo.
              </p>
            </div>
          )}
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
