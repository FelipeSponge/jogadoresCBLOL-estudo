import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "paiN Gaming",
      corPrimaria: "#790714",
      corSecundaria: "#c91d31",
    },
    {
      nome: "Fluxo",
      corPrimaria: "#993399",
      corSecundaria: "#854985",
    },
    {
      nome: "FURIA",
      corPrimaria: "#000000",
      corSecundaria: "#ffffff",
    },
    {
      nome: "INTZ",
      corPrimaria: "#db366a",
      corSecundaria: "#E35883",
    },
    {
      nome: "KaBuM! Esports",
      corPrimaria: "#FC5304",
      corSecundaria: "#fa7537",
    },
    {
      nome: "Liberty",
      corPrimaria: "#029696",
      corSecundaria: "#00FFFF",
    },
    {
      nome: "Los Grandes",
      corPrimaria: "#9e3b01",
      corSecundaria: "#FF5D00",
    },
    {
      nome: "LOUD",
      corPrimaria: "#006e00",
      corSecundaria: "#00FF00",
    },
    {
      nome: "RED Kalunga",
      corPrimaria: "#5f151f",
      corSecundaria: "#BA2338",
    },
    {
      nome: "Vivo Keyd Stars",
      corPrimaria: "#653791",
      corSecundaria: "#F8C70B",
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    debugger;
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoJogadorCadastrado={(novoJogador) =>
          aoNovoJogadorAdicionado(novoJogador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          jogadores={jogadores.filter((jogador) => jogador.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
