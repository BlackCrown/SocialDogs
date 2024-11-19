import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input.jsx';
import Button from '../Form/Button.jsx';
import useForm from '../../Hooks/useForm.jsx';
import { TOKEN_POST, USER_GET } from '../../api.jsx';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (userName.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: userName.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();

      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h1>Login</h1>
          </legend>
          <Input label="Usuário" type="text" name="userName" {...userName} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button>Logar</Button>
        </fieldset>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
