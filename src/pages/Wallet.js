import React, { Component } from 'react';
import Header from '../components/Header';
import Expense from '../components/Expense';
import Currency from '../components/Currency';
import Form from '../components/Form';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <Expense />
        <Currency />
        <Form />
      </div>
    );
  }
}

export default Wallet;

/*
Criado os componentes Header, Expense e Currency para satisfazer o Desafio 03.
*/
