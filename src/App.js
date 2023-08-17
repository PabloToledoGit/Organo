import Banner from './componentes/Banner/Banner'
import CampoTexto from './componentes/CampoTexto/index.js'

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="nome" />
      <CampoTexto label="cargo" />
      <CampoTexto label="imagem" />
      
    </div>
  );
}

export default App;
