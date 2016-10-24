import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';

window.Note = Note;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<p>I'm react</p>,
  document.getElementById('root'));
});
