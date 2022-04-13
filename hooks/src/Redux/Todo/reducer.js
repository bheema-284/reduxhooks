import { GET_TODO, GET_TODO_ERROR, GET_TODO_LOADING } from './action.js';
const initialState = {
  loading: false,
  error: false,
  todos: [],
};

const todoReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_LOADING:
      return { ...store, loading: true };
    case GET_TODO:
      return {
        ...store,
        loading: false,
        error: false,
        todos: [...payload],
      };

    case GET_TODO_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
        todos: [],
      };
    default:
      store;
  }
};
export { todoReducer };
