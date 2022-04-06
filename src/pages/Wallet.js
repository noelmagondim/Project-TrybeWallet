import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, expenseThunk } from '../actions/index';
import Table from '../components/Table';

const alimentacao = 'Alimentação';

class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    };
  }

  // Requisição da API
  componentDidMount() {
    const { getCurrencyList } = this.props;
    getCurrencyList();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { saveExpense, expense } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expenses = {
      id: expense.length,
      value,
      description,
      currency,
      method,
      tag,
    };
    saveExpense(expenses);

    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    });
  }

  allExpenses = () => {
    const { expense } = this.props;
    if (!expense) {
      return 0;
    }
    return expense
      .reduce((acc, element) => {
        acc += Number(element.value)
          * Number(element.exchangeRates[element.currency].ask);
        return acc;
      }, 0).toFixed(2);
  };

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { currencies, email, expense } = this.props;
    const subTotal = this.allExpenses(expense);
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <h4 data-testid="email-field">
            Email:
            { email }
          </h4>
          <p data-testid="total-field">
            { subTotal }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              name="value"
              id="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              name="description"
              id="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label
            htmlFor="currency"
          >
            Moeda:
            <select
              label="Moeda"
              name="currency"
              id="currency"
              data-testid="currency-input"
              value={ currency }
              onChange={ this.handleChange }
            >
              { currencies && currencies.map((element, index) => (
                <option key={ index } value={ element }>{element}</option>))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              data-testid="method-input"
              id="method"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expense: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyList: () => dispatch(fetchAPI()),
  saveExpense: (expense) => dispatch(expenseThunk(expense)),
});

Wallet.propTypes = {
  getCurrencyList: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExpense: PropTypes.func.isRequired,
  expense: PropTypes.arrayOf(PropTypes.any).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
