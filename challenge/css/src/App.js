// Exercicio CSS
import './App.css';
import Car from './components/Car';

function App() {
  const Cars = [
    { id: 1, brand: "Honda", km: 40000, model: "Civic" },
    { id: 2, brand: "Toyota", km: 40000, model: "Sw4" },
    { id: 3, brand: "Honda", km: 40000, model: "City" },
    { id: 4, brand: "Honda", km: 40000, model: "City" },
    { id: 5, brand: "Honda", km: 40000, model: "City" },
    { id: 6, brand: "Honda", km: 40000, model: "City" },
  ];


  return (
    <div className="App">
      <h1>Carros a venda</h1>
      <div className="car-container">
        {Cars.map((car) => (
          <Car key={car.id} brand={car.brand} km={car.km} model={car.model} />
        ))}
      </div>
    </div>
  )
}

export default App;
