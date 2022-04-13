import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { loginReducer } from './Login/reducer.js';
import { todoReducer } from './Todo/reducer.js';
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const middleware = [thunk];
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const rootReducer = combineReducers({
  login: { loginReducer },
  todo: { todoReducer },
});
export const store = createStore(rootReducer, enhancer);
