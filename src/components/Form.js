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
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="descricao"
          />
        </label>
        <label
          htmlFor="currency"
        >
          Moeda:
          <select
            label="Moeda"
            name="currency"
            data-testid="currency-input"
          >
            { currencies.map((element, index) => (
              <option key={ index } value={ element }>{element}</option>)) }
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
