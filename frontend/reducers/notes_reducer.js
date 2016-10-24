import { KEY_RELEASED, KEY_PRESSED } from '../actions/note_actions';

import { NOTE_NAMES } from '../util/tones';

const _defaultState = {
  notes: []
};

function notesReducer(oldState = _defaultState, action) {
  Object.freeze(oldState);
  switch(action.type) {
    case(KEY_PRESSED):
      if (oldState.notes.includes(action.key)) {
          return oldState;
      } else if ( NOTE_NAMES.includes(action.key) ){
        let notes = [...oldState.notes, action.key];
        return { notes };
      } else {
        return oldState;
      }
    case(KEY_RELEASED):
      let index = oldState.notes.indexOf(action.key);
      if (index === -1) {
        return oldState;
      } else {
        let notes = oldState.notes.slice();
        notes.splice(index, 1);
        return { notes };
      }
    default:
      return oldState;
  }
}

export default notesReducer;
