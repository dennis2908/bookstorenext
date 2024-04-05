import { createStore } from 'redux';

const ls = require('local-storage');

if (!ls.get('payload')) {
  ls.set('payload', {});
  ls.set('display', 'block');
}

const initialState = {
  payload: ls.get('payload'),
  display: ls.get('display'),
};

const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_STATE') {
    if (action.payload) {
      ls.set('payload', action.payload);
      state.payload = action.payload;
    } else if (action.payload === '') {
      action.payload = ls.get('payload');
      state.payload = ls.get('payload');
    }
    if (ls.get('display') === 'none') ls.set('display', 'block');
    else ls.set('display', 'none');
    state.display = ls.get('display');
  }

  return state;
};

const storeLogin = createStore(reducer);

export { storeLogin };
