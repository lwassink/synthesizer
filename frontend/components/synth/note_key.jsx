import React from 'react';

function NoteKey ({note, pressed}) {
  let noteClass = pressed ? "pressed key" : "unpressed key";

  return (
    <li className={noteClass}>{note}</li>
  );
}

export default NoteKey;
