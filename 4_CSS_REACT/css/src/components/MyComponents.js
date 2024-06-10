import React from 'react';
import "./MyComponents.css";

const MyComponents = () => {
    return (
        <div>
            <h1>CSS de componentes</h1>
            <p>Este é o paragrafo do componente</p>
            <p className='my-comp-paragraph'>Este tambem e do componente</p>
        </div>
    );
};

export default MyComponents;