import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input.jsx';
import Button from '../Form/Button.jsx';
import useForm from '../../Hooks/useForm.jsx';
import { UserContext } from '../../UserContext.jsx';
import Error from '../Helper/Error.jsx';
import styles from '../Login/LoginForm.module.css';
import stylesBtn from '../Form/Button.module.css';
import Head from '../Helper/Head.jsx';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (userName.validate() && password.validate()) {
      userLogin(userName.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h1 className="title">Login</h1>
          </legend>
          <Input label="Usuário" type="text" name="userName" {...userName} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Logar</Button>
          )}
          <Error error={error} />
          {error && <p>{error && 'Dados incorretos'}</p>}
        </fieldset>
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Esqueceu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastro</h2>
        <p>Ainda não possuí conta? Cadastre-se no site!</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
