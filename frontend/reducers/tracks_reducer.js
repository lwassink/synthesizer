import { START_RECORDING, STOP_RECORDING, ADD_NOTES } from '../actions/track_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

function tracksReducer(oldState = {}, action) {
  Object.freeze(oldState);
  let newState = {};
  merge(newState, oldState);

  switch (action.type) {
    case (START_RECORDING):

      currTrackId += 1;
      let newTrack = {};

      newTrack[currTrackId] = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };

      merge(newTrack, oldState);
      return newTrack;
    case (STOP_RECORDING):

      newState[currTrackId].roll.push({notes: [],
        timeSlice: action.timeNow - oldState[currTrackId].timeStart});

      return newState;
    case (ADD_NOTES):

      let roll = {
        notes: action.notes,
        timeSlice: action.timeNow - oldState[currTrackId].timeStart
      };

      newState[currTrackId].roll.push(roll);
      return newState;

    default:
      return oldState;
  }
}

export default tracksReducer;
