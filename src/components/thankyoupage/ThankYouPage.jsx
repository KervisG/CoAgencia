import React from "react";
import { css } from "../../../styled-system/css";
import logo from "../../assets/logo_coagencia.png"; // Logo de la página
import { headerStyle, contentStyle } from "../../styles/HeaderStyle"; // Reutilizamos el estilo de Header

export default function ThankYouPage() {
  return (
    <div className={headerStyle}>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh", // Ocupa toda la altura de la pantalla
          flexDirection: "column",
          textAlign: "center", // Centrado del texto
        })}
      >
        {/* Logo de la página */}
        <img
          src={logo}
          alt="Logo CoAgência"
          className={css({ width: "200px", marginBottom: "24px" })}
        />

        {/* Mensaje de agradecimiento */}
        <h2
          className={css({
            fontSize: "31px",
            fontWeight: "bold",
            marginBottom: "16px",
            color: "white", // Color blanco como en el Header
          })}
        >
          Obrigado por se cadastrar!
        </h2>

        <p
          className={css({
            fontSize: "18px",
            color: "white", // Color blanco
            maxWidth: "600px",
            lineHeight: "1.5",
          })}
        >
          Em breve a nossa Agente IA irá conversar com você. 
          <br />Verifique o seu whatasapp.
        </p>
      </div>
    </div>
  );
}
