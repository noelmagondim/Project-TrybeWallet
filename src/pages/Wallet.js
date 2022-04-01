import React, { Component } from 'react';
import Header from '../components/Header';
import Expense from '../components/Expense';
import Currency from '../components/Currency';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <Expense />
        <Currency />
      </div>
    );
  }
}

export default Wallet;

/*
Criado os componentes Header, Expense e Currency para satisfazer o Desafio 03.
*/
