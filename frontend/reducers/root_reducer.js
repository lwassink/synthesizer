import { combineReducers } from 'redux';
import notesReducer from './notes_reducer';

const rootReducer = combineReducers({
  notesReducer: notesReducer
});

export default rootReducer;
