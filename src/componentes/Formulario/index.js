import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  const times = [
    'Nenhum',
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão',

  ]


  return (
    <section className="formulario">
      <form>
        <h1>Preencha os dados para criar o card do colaborador</h1>
        <CampoTexto label="nome" placeholder="digite seu nome" />
        <CampoTexto label="cargo" placeholder="digite seu cargo" />
        <CampoTexto label="imagem" placeholder="digite o link da sua imagem" />
        <ListaSuspensa label="time" itens={times} />
      </form>
    </section>
  );
};

export default Formulario;
