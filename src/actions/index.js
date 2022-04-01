import getCurrency from '../services/serviceAPI';

export const setUserData = (email, senha) => ({
  type: 'SET_USER_DATA',
  email,
  senha,
});

export const setWalletData = (wallet) => ({
  type: 'SET_WALLET_DATA',
  wallet,
});

// Abaixo são as modificações necessárias para o desafio 04

export const getCurrencies = (currencies) => ({
  type: 'GET_CURRENCIES',
  currencies,
});

// Agora vou utilizar o thunk para despachar ações assíncronas - Ainda referente ao desafio 04

export function fetchAPI() {
  return async (dispatch) => {
    const result = await getCurrency();
    delete result.USDT;
    const values = Object.keys(result);
    return dispatch(getCurrencies(values));
  };
}
