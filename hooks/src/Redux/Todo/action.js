export const GET_TODO_LOADING = 'GET_TODO_LOADING';
export const GET_TODO = 'GET_TODO';
export const GET_TODO_ERROR = 'GET_TODO_ERROR';

export const getTodoLoading = () => ({
  type: GET_TODO_LOADING,
});

export const getTodo = (payload) => ({
  type: GET_TODO,
  payload,
});

export const getTodoError = () => ({
  type: GET_TODO_ERROR,
});

export const getTodoData = () => (dispatch) => {
  dispatch(getTodoLoading());
  fetch(`http://localhost:8080/todos`)
    .then((res) => res.json())
    .then((res) => dispatch(getTodo(res)))
    .catch((err) => dispatch(getTodoError()));
};
