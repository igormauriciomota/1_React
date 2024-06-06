const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
    };

    //Função de renderização / podendo colocar uma função fora do return;
    const renderSomething = (x) => {

        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Tambem posso renderizar isso!</h1>
        }
    };

    //Fim da função de renderização
    return (

        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
        

    );
};

export default Events;