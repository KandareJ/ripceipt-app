export const LOGIN = 'LOGIN';
export const ADD_RECEIPT = 'ADD_RECEIPT';

export const login = (username, password) => {
  return {
    type: LOGIN,
    payload: {
      username,
      password
    }
  };
}

export const logout = () => {
  return {
    type: LOGIN,
    payload: null
  };
}

export const addReceipt = (receipt) => {
  return {
    type: ADD_RECEIPT,
    payload: receipt
  }
}
