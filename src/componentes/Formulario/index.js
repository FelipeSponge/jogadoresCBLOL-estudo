import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const roles = ["Topo", "Caçador", "Meio", "Atirador", "Suporte"];

  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [role, setRole] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoJogadorCadastrado({
      nome,
      role,
      imagem,
      time,
    });
    setNome("");
    setImagem("");
    setTime("");
    setRole("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome"
          valor={nome}
          aoAlterado={(novoNome) => setNome(novoNome)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Posição"
          itens={roles}
          valor={role}
          aoAlterado={(novaRole) => setRole(novaRole)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(novaImagem) => setImagem(novaImagem)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          itens={props.times}
          valor={time}
          aoAlterado={(novoTime) => setTime(novoTime)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
