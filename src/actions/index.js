// Coloque aqui suas actions
export const setUserData = (email, senha) => ({
  type: 'SET_USER_DATA',
  email,
  senha,
});

export const setWalletData = (wallet) => ({
  type: 'SET_WALLET_DATA',
  wallet,
});
