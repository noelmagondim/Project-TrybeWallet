// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletDataReducer = (state = INITIAL_STATE, action) => {
  const { wallet } = action;

  switch (action.type) {
  case 'SET_WALLET_DATA':
    return {
      ...state,
      wallet,
    };
  default:
    return state;
  }
};

export default walletDataReducer;
