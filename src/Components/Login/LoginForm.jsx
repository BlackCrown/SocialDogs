import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input.jsx';
import Button from '../Form/Button.jsx';

const LoginForm = () => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h1>Login</h1>
          </legend>
          <Input label="Usuário" type="text" name="userName" />
          <Input label="Senha" type="password" name="password" />
          <Button>Logar</Button>
        </fieldset>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
