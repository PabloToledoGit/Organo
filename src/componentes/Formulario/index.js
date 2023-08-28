import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Nenhum",
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    console.log("foi submetido");
    evento.preventDefault();
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h1>Preencha os dados para criar o card do colaborador</h1>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholde="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <ListaSuspensa label="time" itens={times} />
        <Botao texto="Criar Card">Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
