import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;
  const [nome, setNome] = useState("Nome");
  const [cargo, setCargo] = useState("Cargo");
  const [imagem, setImagem] = useState("link");

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };


  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
