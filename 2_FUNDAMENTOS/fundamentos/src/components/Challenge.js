

const Challenge = () => {
    const a = 10
    const b = 15
    const soma = a + b

    return (

    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => console.log(soma)}> Clique para ver a Soma!</button>
    </div>
    )
};

export default Challenge