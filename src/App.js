import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./Users";
import Counter from "./Counter";
import Header from "./Header";
import InputNome from "./InputNome";
import Calculadora from "./Calculadora"
import Button from "./Button";
import Card from "./Card"
import Feedback from "./Feedback";
import Imagem from "./Imagem";

export default function App() {
  return (
    <div className="App">
      <Header />
      <InputNome />
      <Counter />
      <Users />
      <Button outline="false" color="primary" title="Clique aqui"/>
      <Card />
      <Calculadora />
      <Feedback />
      <Imagem />
    </div>
  );
}
