import React from 'react'

function Note({ index, note, onDelete }) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
}

export default Note;
