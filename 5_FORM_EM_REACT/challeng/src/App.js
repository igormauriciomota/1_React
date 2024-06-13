import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
    {/* Inicio Formulario */}
      <h2>Formulario</h2>
      <MyForm user={{name: "Igor Mota", email: "igormotacontabil@gmail.com", bio: "Sou Frontend", role: "admin"}} />


    {/* Fim form */}
    </div>
  );
}

export default App;
