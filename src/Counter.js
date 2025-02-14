import React, { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Contador</h3>
      <p>Valor = {count}</p>
      <Button onClick={() => setCount(count + 1)} title="Incrementar" color="success" outline={false}/>
      <Button onClick={() => setCount(count > 0 ? count - 1 : 0)} title="Decrementar" color="danger"/>
    </>
  );
}
