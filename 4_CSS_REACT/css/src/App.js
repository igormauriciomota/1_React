import './App.css';
import MyComponents from './components/MyComponents';

import { useState } from "react";

function App() {
  const n = 15
  const [name] = useState("Igor");

  const redTitle = true;


  return (
    <div className="App">
      {/* Inicio aulas css com react */}
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS de Componets */}
      <MyComponents />
      <p>Este parágrafo e do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline dinamico */}
      <h2 style={ n < 10 ? ({color: "purple"}) : ({color: "green"})}>
        CSS Dinamico
      </h2>
      <h2 style={ n < 16 ? ({color: "purple"}) : ({color: "green"})}>
        CSS Dinamico
      </h2>
      <h2 style={
        name === "Igor"
      ? { color: "green", backgroundColor: "#000" } : null
      }
      >
        Teste nome
      </h2>
      {/* Classes dinamicas no css */}
      <h2 className={redTitle ? "red-title" : "title" }>
        Este titulo vai ter classe dinamica
      </h2>






      {/* Fim do projeto */}
    </div>
  );
}

export default App;
