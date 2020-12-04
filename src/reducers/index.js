import { combineReducers } from 'redux';

import { LOGIN, ADD_RECEIPT, SET_VIEW, FILTER } from '../actions';

const login = (last=null, action) => {
  if (action.type === LOGIN) {
    return {
      username: action.payload.username,
      password: action.payload.password
    }
  }

  return last;
}

const receipts = (last=[], action) => {
  if (action.type === LOGIN) {
    return action.payload.receipts;
  }
  return last;
}

const view = (last='Card', action) => {
  if (action.type === SET_VIEW) {
    return action.payload;
  }

  return last;
}

const filter = (last='DateNO', action) => {
  if (action.type === FILTER) {
    return action.payload
  }

  return last
}

export default combineReducers({
  login,
  receipts,
  view,
  filter
});

/*
{
  source: 'https://ocr.space/Content/Images/receipt-ocr-original.jpg',
  store: 'Zalmart',
  price: 5.21,
  timestamp: Date.now() - 120000000
},
{
  source: 'https://ocr.space/Content/Images/receipt-ocr-original.jpg',
  store: 'Almart',
  price: 98.21,
  timestamp: Date.now()
}
*/
