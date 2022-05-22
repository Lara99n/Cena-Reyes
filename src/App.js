import "./App.css";
import imagen0 from "./img/rey_atanagildo.png";
import imagen1 from "./img/rey_ataulfo.png";
import imagen2 from "./img/rey_ervigio.png";
import imagen3 from "./img/rey_leogivildo.png";
import imagen4 from "./img/rey_recesvinto.png";
import imagen5 from "./img/rey_sisebuto.png";
import imagen6 from "./img/rey_teodorico.png";
import { useState } from "react";
import Reyes from "./Reyes.jsx";

const App = () => {
  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178,
    },
    {
      nombre: "Ataúlfo",
      color: "crimson",
      precio: 169,
    },
    {
      nombre: "Ervigio",
      color: "peru",
      precio: 81,
    },
    {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126,
    },
    {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141,
    },
    {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69,
    },
    {
      nombre: "Teodorico",
      color: "pink",
      precio: 55,
    },
  ];

  const [state, setState] = useState(0);

  return (
    <div>
      <h1>Total a pagar: {state} €</h1>a
      <div className="cajaCentral">
        <Reyes
          rey={reyes[0].nombre}
          imagen={imagen0}
          color={reyes[0].color}
          precio={reyes[0].precio}
          setState={setState}
        />

        <Reyes
          rey={reyes[1].nombre}
          imagen={imagen1}
          color={reyes[1].color}
          precio={reyes[1].precio}
          setState={setState}
        />
        <Reyes
          rey={reyes[2].nombre}
          imagen={imagen2}
          color={reyes[2].color}
          precio={reyes[2].precio}
          setState={setState}
        />
        <Reyes
          rey={reyes[3].nombre}
          imagen={imagen3}
          color={reyes[3].color}
          precio={reyes[3].precio}
          setState={setState}
        />
        <Reyes
          rey={reyes[4].nombre}
          imagen={imagen4}
          color={reyes[4].color}
          precio={reyes[4].precio}
          setState={setState}
        />
        <Reyes
          rey={reyes[5].nombre}
          imagen={imagen5}
          color={reyes[5].color}
          precio={reyes[5].precio}
          setState={setState}
        />
        <Reyes
          rey={reyes[6].nombre}
          imagen={imagen6}
          color={reyes[6].color}
          precio={reyes[6].precio}
          setState={setState}
        />
      </div>
    </div>
  );
};

export default App;
