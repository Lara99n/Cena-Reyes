import { useState } from "react";
import "./miCss.css";
import imagen1 from "./img/rey_ataulfo.png";
import imagen2 from "./img/rey_ervigio.png";
import imagen3 from "./img/rey_atanagildo.png";
import incognito from "./img/rey_incognito.png";
import MiComponente from "./MiComponente";

const App = () => {
  const rey = ["Ataulfo", "Ervigio", "Atanagildo"];

  const cambioTexto = (e) => {
    if (e.target.innerHTML === "Visto") {
      e.target.innerHTML = "";
    } else {
      e.target.innerHTML = "Visto";
    }
  };

  const cambiarFoto = (e) => {
    if (e.target.src.includes("incognito")) {
      e.target.style.visibility = "hidden";
    } else {
      e.target.src = incognito;
    }
    e.target.parentNode.style.backgroundColor = "white";
  };

  const reyesGodos = [
    {
      nombre: "Ataulfo",
      aficion: "comer toros sin pelar",
    },
    {
      nombre: "Recesvinto",
      aficion: "leer a Hegel e arameo",
    },
    {
      nombre: "Teodorico",
      aficion: "la cria del escarabajo en almibal",
    },
  ];

  const [state, setState] = useState(0);
  const [frase, setFrase] = useState();
  const siguiente = () => {
    setState(state + 1);
    if (state + 1 >= reyesGodos.length) {
      setState(0);
    }
    setFrase(
      <h2>
        `La aficion principal de <span>{reyesGodos[state].nombre}</span> es
        <span> {reyesGodos[state].aficion}</span>`
      </h2>
    );
  };

  return (
    <>
      <button onClick={(e) => siguiente(e)}>Ver siguente</button>
      <div>{frase}</div>
      <div className="contenedor">
        <div className="caja">
          <img onClick={cambiarFoto} src={imagen1} />

          <div onClick={cambioTexto} className="nombre">
            {rey[0]}
          </div>
        </div>
        <div className="caja">
          <img onClick={cambiarFoto} src={imagen2} />
          <div onClick={cambioTexto} className="nombre">
            {rey[1]}
          </div>
        </div>
        <div className="caja">
          <img onClick={cambiarFoto} src={imagen3} />
          <div onClick={cambioTexto} className="nombre">
            {rey[2]}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
