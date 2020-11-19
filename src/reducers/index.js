import { combineReducers } from 'redux';

import { LOGIN } from '../actions';

const login = (last=null, action) => {
  if (action.type === LOGIN) {
    return action.payload;
  }

  return last;
}

export default combineReducers({
  login
});
