import Recorder from './recorder';
import { connect } from 'react-redux';
import { startRecording, stopRecording } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  isRecording: state.isRecording,
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
