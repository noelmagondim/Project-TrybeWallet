// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  senha: '',
};

const userDataReducer = (state = INITIAL_STATE, action) => {
  const { email, senha } = action;

  switch (action.type) {
  case 'SET_USER_DATA':
    return {
      ...state,
      email,
      senha,
    };
  default:
    return state;
  }
};

export default userDataReducer;
