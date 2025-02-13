import React from "react";
import "./styles.css";
import Users from "./Users";
import Counter from "./Counter";
import Header from "./Header";
import InputNome from "./InputNome";
import Calculadora from "./Calculadora"

export default function App() {
  return (
    <div className="App">
      <Header />
      <InputNome />
      <Counter />
      <Users />
      <Calculadora />

    </div>
  );
}
