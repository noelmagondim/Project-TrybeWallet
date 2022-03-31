import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setUserData } from '../actions/index';

class Login extends Component {
  // Definindo o estado inicial da aplicação
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      btnDisabled: true,
    };
  }
  // desabilitando o botão e habilitando apenas com o formato de email e senha válidos

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => this.setState({ btnDisabled: this.verify() }));
  }

  verify = () => {
    const { email, senha } = this.state;
    const emailRegex = (/^[a-z0-9_.-]+@[a-z0-9-]+.[a-z]+?$/i);
    const minLength = 6;
    if (!emailRegex.test(email) || (senha.length < minLength)) return true;
    return false;
  }

  render() {
    const { email, senha, btnDisabled } = this.state;
    const { loginDispatch } = this.props;
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="senha"
            id="senha"
            onChange={ this.handleChange }
            value={ senha }
          />
        </label>
        <Link
          to="/carteira"
          onClick={ () => loginDispatch(email, senha) }
        >
          <button
            type="button"
            disabled={ btnDisabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email, senha) => dispatch(setUserData(email, senha)),
});

Login.propTypes = ({
  loginDispatch: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(Login);

/* Explicando o desafio 01
Antes de iniciar a questão em si configurei o store, reducers e actions
Fiz as rotas no App.js para renderizar meus componentes
Montei o esqueleto da página login e fui fazer a lógica pra desativar o botão
Depois que consegui vencer essa parte usei o mapDispatchToProps para enviar as informações de login pro store
Coloquei o button dentro de um Link pra renderizar a página da carteira ao clicar
*/
