import './MyForm.css';

import { useState } from 'react';

const MyForm = ({user}) => {
  // 6 - Controlled inputs



  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  // teremos uma função referente a gerenciamento de dados 3
  //exemplo setName
  const handleName = (e) => {
    setName(e.target.value);
  };

  //console.log(name);
  //console.log(email);

  // função da {handleSubmit}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulario");
    console.log(name, email);

    // 7 - Limpar form
    setName("");
    setEmail("");
  };


  return (
    <div>
        {/* 5 - envio de form onSubmit={handleSubmit}*/}

        {/* 1 - Criação de Form */}
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}
            />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* 4 - simplificação de manipulação de state */}
                <input type="text" name="email" placeholder="Digite o seu e-mail"
                onChange={(e) => setEmail(e.target.value)} value={email}
                />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm