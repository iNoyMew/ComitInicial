import React, { useState } from "react";
import "./styles.css";

export default function InputNome() {
  const [nome, setNome] = useState(""); //Definido valor inicial do estado

  return (
    <>
      <label className="texto">Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
        required
      />
      <h2 className="texto">Olá, {nome ? nome : "visitante"}</h2>
    </>
  );
}
