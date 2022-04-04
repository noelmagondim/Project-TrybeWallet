import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions/index';

class Form extends Component {
  componentDidMount() {
    const { getCurrencyList } = this.props;
    getCurrencyList();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="valor"
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="descricao"
            id="descricao"
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
          >
            <option value="1">Dinheiro</option>
            <option value="2">Cartão de crédito</option>
            <option value="3">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
          >
            <option value="1">Alimentação</option>
            <option value="2">Lazer</option>
            <option value="3">Trabalho</option>
            <option value="4">Transporte</option>
            <option value="5">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyList: () => dispatch(fetchAPI()),
});

Form.propTypes = {
  getCurrencyList: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
