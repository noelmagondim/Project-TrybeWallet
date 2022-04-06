const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletDataReducer = (state = INITIAL_STATE, action) => {
  const { currencies, expenses, type, error } = action;
  switch (type) {
  case 'SET_WALLET_DATA':
    return {
      ...state,
    };
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies: [...state.currencies, ...currencies],
    };
  case 'API_FAIL':
    return {
      ...state,
      error,
    };
  case 'SAVE_EXPENSES': {
    return {
      ...state,
      expenses: [...state.expenses, expenses],
    };
  }
  default:
    return state;
  }
};

export default walletDataReducer;
