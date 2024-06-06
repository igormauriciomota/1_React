// Components
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstComponents from './components/FirstComponents';
import MyComponent from './components/MyComponent';
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
      <MyComponent/>
      <Events/>
      <Challenge/>

      {/* Fim do Projeto */}
    </div>
  );
}

export default App;
