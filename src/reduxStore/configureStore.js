// TODO: importar createStore

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import book from './reducers/book';


const configureStore = () => {
    const store  = createStore(book, applyMiddleware(thunk));
    return store;
};

export default configureStore;