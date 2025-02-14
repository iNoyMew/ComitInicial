import React from "react";
import { Button } from "reactstrap";



const Botao = (props) => {
  return (
    <div className="App">
      <h1>{props.titulo}</h1>
      <Button outline={props.outline} color={props.color} onClick={props.onClick}>{props.title}</Button>
    </div>
  );
}

export default Botao;