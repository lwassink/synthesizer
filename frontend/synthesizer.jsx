import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  
  ReactDOM.render(<p>I'm react</p>,
  document.getElementById('root'));
});
