// Components
import FirstComponents from './components/FirstComponents';
import TemplateExpressions from './components/TemplateExpressions';

// styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Inicio do Projeto */}

      <h1>Fundamentos React</h1>
      <FirstComponents/>
      <TemplateExpressions/>

      {/* Fim do Projeto */}
    </div>
  );
}

export default App;
