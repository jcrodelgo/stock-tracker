
"use client";
import { useState } from "react";

export default function Page() {
  const [acciones, setAcciones] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const valor = Number(acciones);
    setResultado(valor * 100); // demo
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Mi app de acciones</h1>

      <input
        type="number"
        placeholder="Número de acciones"
        value={acciones}
        onChange={(e) => setAcciones(e.target.value)}
      />

      <button onClick={calcular}>Calcular</button>

      {resultado && <p>Total: {resultado} EUR</p>}
    </div>
  );
}
