import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}

export default configureStore;