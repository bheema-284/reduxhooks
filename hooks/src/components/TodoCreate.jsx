import { v4 as uuid } from 'uuid';

import { getTodoData } from '../Redux/Todo/action';
import { useDispatch } from 'react-redux';
import { useReducer, useState } from 'react';

const initialState = {
  title: '',
  des: false,
  subtasks: [],
  status: '',
  tags: { official: false, personal: false, others: false },
  date: '',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_TITLE':
      return { ...state, title: payload };

    case 'UPDATE_DES':
      return { ...state, des: payload };

    case 'UPDATE_STATUS':
      return { ...state, status: payload };

    case 'UPDATE_TAGS':
      return { ...state, tags: { ...state.tags, ...payload } };

    case 'CHANGE_DATE':
      return { ...state, date: payload };

    case 'UPDATE_SUBTASKS':
      return { ...state, subtasks: [...state.subtasks, ...payload] };
    default:
      throw new Error('Please provide corect cedentials');
  }
};

export const TodoCreate = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useDispatch();
  const [subtask, setSubtask] = useState('');

  const CreateNewTAsk = () => {
    const payload = { ...state };
    fetch(`http://localhost:8080/todos`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => reduxDispatch(getTodoData()))
      .catch((err) => dispatch(loginError()));
  };
  const { title, des, tags, subtasks, date, status } = state;
  const { official, personal, others } = tags;

  return (
    <div>
      <input
        type="text"
        name=""
        placeholder="Title"
        value={title}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_TITLE', payload: e.target.value })
        }
      />
      <br />
      <br />
      <input
        type="text"
        name=""
        placeholder="Des"
        value={des}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_DES', payload: e.target.value })
        }
      />
      <br />
      <br />

      <div>
        <label>
          <input
            type="radio"
            checked={status === 'todo'}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_STAUS', payload: 'todo' })
            }
          />
          Todo
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={status === 'inprogress'}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_STAUS', payload: 'inprogress' })
            }
          />
          In progress
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={status === 'done'}
            onChange={(e) =>
              dispatch({ type: 'UPDATE_STAUS', payload: 'done' })
            }
          />
          Done
        </label>
        <br />
      </div>
      <br />
      <div>
        <label>
          <input
            type="checkbox"
            checked={official}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_TAGS',
                payload: { official: e.target.value },
              })
            }
          />
          Official
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={personal}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_TAGS',
                payload: { personal: e.target.value },
              })
            }
          />
          Personal
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={others}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_TAGS',
                payload: { others: e.target.value },
              })
            }
          />
          Others
        </label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <input
        type="date"
        name=""
        value={date}
        onChange={(e) =>
          dispatch({ type: 'CHANGE_DATE', payload: e.target.value })
        }
      />
      <br />
      <br />
      <br />
      <h1>create tasks</h1>
    </div>
  );
};
