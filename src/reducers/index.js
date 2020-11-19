import { combineReducers } from 'redux';

import { LOGIN, ADD_RECEIPT } from '../actions';

const login = (last=null, action) => {
  if (action.type === LOGIN) {
    return action.payload;
  }

  return last;
}

const receipts = (last=[
  {
    source: 'https://ocr.space/Content/Images/receipt-ocr-original.jpg'
  },
  {
    source: 'https://ocr.space/Content/Images/receipt-ocr-original.jpg'
  },
  {
    source: 'https://ocr.space/Content/Images/receipt-ocr-original.jpg'
  }
], action) => {
  return last;
}

export default combineReducers({
  login,
  receipts
});
