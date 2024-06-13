import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
    {/* Inicio Formulario */}
      <h2>Formulario</h2>
      <MyForm user={{name: "Josias", email: "josias@gmail.com"}} />


    {/* Fim form */}
    </div>
  );
}

export default App;
