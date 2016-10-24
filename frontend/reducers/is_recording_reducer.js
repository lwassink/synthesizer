import { START_RECORDING, STOP_RECORDING } from '../actions/track_actions';

function isRecordingReducer(oldState = false, action) {
  Object.freeze(oldState);
  switch(action.type) {
    case(START_RECORDING):
      return true;
    case(STOP_RECORDING):
      return false;
    default:
      return oldState;
  }
}

export default isRecordingReducer;
