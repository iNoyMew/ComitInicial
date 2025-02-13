import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Contador</h3>
      <p>Valor = {count}</p>
      <button onClick={() => setCount(count + 1)}> Incrementar</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Decrementar
      </button>
    </>
  );
}
