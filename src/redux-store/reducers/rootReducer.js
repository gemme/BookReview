import { combineReducers } from 'redux';
import book from './book';
import review from './review';

export default combineReducers({
    book,
    review
  });
