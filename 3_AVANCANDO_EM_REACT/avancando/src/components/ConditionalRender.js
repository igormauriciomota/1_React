import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name] = useState("João");

    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x e falso</p>}
        <h1>If ternario</h1>
        {name === "João" ? (
            <div>
                <p>O nome e João</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
    );
};

export default ConditionalRender;