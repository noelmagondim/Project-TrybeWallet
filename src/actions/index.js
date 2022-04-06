import getCurrency from '../services/serviceAPI';

export const setUserData = (email, senha) => ({
  type: 'SET_USER_DATA',
  email,
  senha,
});

export const setWalletData = () => ({
  type: 'SET_WALLET_DATA',
});

// Abaixo são as modificações necessárias para o desafio 04

export const getCurrencies = (currencies) => ({
  type: 'GET_CURRENCIES',
  currencies,
});

// Action da falha

export const apiFail = (error) => ({
  type: 'API_FAIL',
  error,
});

// Agora vou utilizar o thunk para despachar ações assíncronas - Ainda referente ao desafio 04

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(setWalletData());
    try {
      const result = await getCurrency();
      delete result.USDT;
      const aux = Object.keys(result);
      dispatch(getCurrencies(aux));
    } catch (error) {
      dispatch(apiFail(error));
    }
  };
}

// Os códigos abaixo são referentes ao Desafio 06, fiz separado para não confundir

// Actios dos custos

export const getExpenses = (value, exchangeRates) => ({
  type: 'SAVE_EXPENSES',
  expenses: { ...value, exchangeRates },
});

// Vou fazer um thunk conforme recomendado pelo README

export function expenseThunk(exchangeRates) {
  return async (dispatch) => {
    dispatch(setWalletData());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(getExpenses(exchangeRates, data)))
      .catch((error) => dispatch(apiFail(error)));
  };
}
