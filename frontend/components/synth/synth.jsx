import React from 'react';
import Note from '../../util/note';
import { NOTE_NAMES, TONES } from '../../util/tones';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = {};
    NOTE_NAMES.forEach((noteName) => {
      let freq = TONES[noteName];
      this.notes[noteName] = new Note(freq);
    });
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  playNotes() {
    NOTE_NAMES.forEach( (note) => {
      if (this.props.notes.includes(note)) {
        this.notes[note].start();
      } else {
        this.notes[note].stop();
      }
    });
  }


  render() {
    let playedNotes = NOTE_NAMES.map(note => {
      if (this.props.notes.includes(note)) {
        return <NoteKey key={note} note={note} pressed={true} />; //NoteKey(note, true);
      } else {
        return <NoteKey key={note} note={note} pressed={false} />;
      }
    });

    this.playNotes();
    return (
      <div className="piano">{playedNotes}</div>
    );
    }
}

export default Synth;
