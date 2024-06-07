import React from 'react';

const ManageData = () => {
    let someData = 10;

    console.log(someData);

  return (

    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() =>
                someData = 15
            }
            >
                Mudar variavel</button>
        </div>
    </div>

  )
}

export default ManageData