import React from 'react'
import Note from './Note';

function NoteList({ notes, onDelete }) {
  return (
    <div>
      {notes.map((note, index) => (
        <Note key={index} index={index} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
