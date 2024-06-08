import { useState } from 'react';
import './App.css';

import leao from './assets/leao.png';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {
  const name = "Igor Mota";
  const [userName] = useState("Maria");

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
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props / componente pode usar tambem o name={userName} ou name={name}*/}
      <ShowUserName name={userName} />
      {/* destructuring MyComponent({name, age}) */}
      <CarDetails brand="VW" km={1000} color="Azul" newCar={false} />
      {/* Reaproveitamento de props */}
      <CarDetails brand="Ford" color="vermelho" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* Fim do Projeto */}
    </div>
  );
}

export default App;
