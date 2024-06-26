import { useState } from 'react';
import './App.css';

import leao from './assets/leao.png';
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';


function App() {
  const [userName] = useState("Maria");

  //Array lista de carros, props (CarDetails.js).
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km: 4500 },
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 6500 },
  ];
  //Funçoes em props
  function showMessage() {
    console.log("Evento do componete pai");
  }
// Elevação de state / controlado pelo elemento pai
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
// fim Message

// ----Exercicio Array usuarios (UserDatails.js)---
const users = [
  {id: 1, name: "Matheus", job: "Programador", age: 31},
  {id: 2, name: "Maria", job: "Estudante", age: 17},
  {id: 3, name: "Igor", job: "Programador", age: 39},
  {id: 3, name: "Barbara", job: "Admidistrativo", age: 37},
];

//Fim exercicio
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
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
      ))}
    {/* Fim de loop */}
    <Fragment propFragment="teste" />
    
    {/* Children */}
        <Container myValue="testing">
          <p>2- E este e o conteudo</p>
        </Container>
        <Container myValue="testing 2">
          <h5>Testando o container</h5>
        </Container>
    {/* Executar função */}
        <ExecuteFunction myFunction={showMessage} />
    {/* State lift - Elevação de state */}
    {/* Elemento que consome o estado pai */}
    <Message msg={message} />
    {/* Componete que altera o estado e eleva,  */}
    <ChangeMessageState handleMessage={handleMessage}/>
    {/* Exercicio Array */}
    {users.map((user) => (
      <UserDetails
      key={user.id}
      name={user.name}
      job={user.job}
      age={user.age}
      />
    ))}









    
    {/* ----------Fim do Projeto----------- */}
    </div>
  );
}

export default App;
