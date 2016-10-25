import React from 'react';
import Track from './track';

function Jukebox({ isPlaying, isRecording, tracks, onPlay} ) {
  return (<div className="recordings">
    {Object.keys(tracks).reverse().map(id => <Track key={id} isPlaying={isPlaying}
      isRecording={isRecording} track={tracks[id]} onPlay={onPlay}/>)}
  </div>);
}

export default Jukebox;
