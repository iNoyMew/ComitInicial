import React, {useState} from "react";
import "./styles.css";

export default function Calculadora(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [soma, setSoma] = useState(0);

    return(
        <>
            <h2>Calculadora Básica</h2>
            <label>Valor 1</label>
            <input 
                type="text"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                placeholder="Digite o primeiro valor"
                required
            />
            
            <label>Valor 2</label>
            <input 
                type="text"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                placeholder="Digite o segundo valor"
                required
            />

            <button className="botaoCalcular" onClick={() =>setSoma(num1 + num2)}>Somar</button>
            <p>O valor da soma é: {soma}</p>
        </>
    )
}