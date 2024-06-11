import React from 'react';
import styles from "./Titles.module.css";

const Titles = () => {
    return (
        <div>
            <h1 className={styles.my_title}>Meu título</h1>

            <h2 className='my-title'>Testando</h2>
        </div>
    );
};

export default Titles;