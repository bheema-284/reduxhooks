import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOADING } from './action.js';
const initialState = {
  loading: false,
  error: false,
  isAuthenticated: false,
  token: '',
  username: '',
};

const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        isAuthenticated: true,
        token: payload.token,
        username: payload.username,
      };

    case LOGIN_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
        isAuthenticated: false,
        token: '',
        username: '',
      };
    default:
      store;
  }
};
export { loginReducer };
