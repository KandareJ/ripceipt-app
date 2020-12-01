export const LOGIN = 'LOGIN';
export const ADD_RECEIPT = 'ADD_RECEIPT';
export const SET_VIEW = 'SET_VIEW';
export const FILTER = 'FILTER'

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
  };
}

export const setView = (view) => {
  return {
    type: SET_VIEW,
    payload: view
  };
}

export const filter = (type) => {
  return {
    type: FILTER,
    payload: type
  };
}
