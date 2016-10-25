import React from 'react';

function Track ( { onPlay, track, isRecording, isPlaying } ) {
  return (
    <div key={track.id}>
        <label>
          {track.name}
          <button
            className ='play-button'
            onClick={onPlay(track)}
            disabled={isRecording || isPlaying}>
            Play
          </button>
        </label>
    </div>
  );

}

export default Track;
