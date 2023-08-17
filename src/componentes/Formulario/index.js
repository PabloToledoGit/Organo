import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h1>Preencha os dados para criar o card do colaborador</h1>
        <CampoTexto label="nome" placeholder="digite seu nome" />
        <CampoTexto label="cargo" placeholder="digite seu cargo" />
        <CampoTexto label="imagem" placeholder="digite o link da sua imagem" />
      </form>
    </section>
  );
};

export default Formulario;
