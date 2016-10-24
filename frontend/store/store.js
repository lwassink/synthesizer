import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';


const preloadedState = {
    notes: [],
    isRecording: false,
    tracks: {}
  };

export default function configureStore(state = preloadedState) {
  return createStore(rootReducer, state);
}
