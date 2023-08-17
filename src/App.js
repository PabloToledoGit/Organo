import Banner from './componentes/Banner/Banner'
import CampoTexto from './componentes/CampoTexto/index.js'

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="nome" placeholder="digite seu nome" />
      <CampoTexto label="cargo" placeholder="digite seu cargo" />
      <CampoTexto label="imagem" placeholder="digite o link da sua imagem" />
      
    </div>
  );
}

export default App;
