import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, expenseThunk } from '../actions/index';

class Header extends Component {
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
      const { email, expense } = this.props;
      const subTotal = this.allExpenses(expense);
      return (
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
      );
    }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expense: state.wallet.expenses,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyList: () => dispatch(fetchAPI()),
  saveExpense: (expense) => dispatch(expenseThunk(expense)),
});

Header.propTypes = {
  expense: PropTypes.arrayOf(PropTypes.any).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
