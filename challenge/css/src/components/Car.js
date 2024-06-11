import styles from "./Car.module.css";

const Car = ({brand, km, model }) => {

  return (
    <div className={styles.card}>
      <h2>Modelo: {model}</h2>
      <p>Marca: {brand}</p>
      <p>Quilometragem: {km}</p>
    </div>
  );
};

export default Car;