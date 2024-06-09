

const Container = ({children, myValue}) => {
    

    return (
        <div>
            <h2>1-Este é o titulo do container</h2>
            {children}
            <p>O Valor é: {myValue}</p>
        </div>
    );
};

export default Container;