import './App.css';

import leao from './assets/leao.png';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      {/* Inicio Projeto */}
      <div>
        <h1>Avançando em React</h1>

        {/* Imagem em public */}
        <div>
          <img src="/Genesis.png" alt="Genesis" />
        </div>
        {/* Imagem em asset */}
        <div>
          <img src={leao} alt="leao" />
        </div>
      </div>
      <ManageData/>
      <ListRender/>
      {/* Fim do Projeto */}
    </div>
  );
}

export default App;
