import { connect } from 'react-redux';
import { groupUpdate } from '../../actions/note_actions';
import { startPlaying, stopPlaying } from '../../actions/playing_actions';
import Jukebox from './jukebox';


const mapStateToProps = (state) => ({
  isRecording: state.isRecording,
  isPlaying: state.isPlaying,
  tracks: state.tracks
});

const mapDispatchToProps = (dispatch) => ({
  onPlay: track => e => {
    dispatch(startPlaying());
    let playBackStartTime = Date.now();
    let currNote = 0;
    let timeElapsed = 0;

    let interval = setInterval(() => {
      if (currNote < track.roll.length - 1) {
        if (Date.now() - playBackStartTime > track.roll[currNote].timeSlice) {
          currNote += 1;
          dispatch(groupUpdate(track.roll[currNote].notes));
        }
      } else {
        clearInterval(interval);
        dispatch(stopPlaying());
      }
    }, 1);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
