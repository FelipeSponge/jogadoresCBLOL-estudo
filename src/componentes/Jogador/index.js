import "./Jogador.css";

const Jogador = ({ nome, role, imagem, corPrimaria }) => {
  return (
    <div className="jogador">
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Jogador;
