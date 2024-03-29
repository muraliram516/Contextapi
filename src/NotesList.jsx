import React, { useContext } from 'react';
import { NotesContext } from './NotesContext';
import './NotesList.css'; // List styles

const NotesList = () => {
  const { state, dispatch } = useContext(NotesContext);

  return (
    <div className="notes-list">
      {state.notes.map(note => (
        <div key={note.id} className="note-item">
          <h3>{note.title}</h3>
          <p>{note.desc}</p>
          <button onClick={() => dispatch({ type: 'DELETE_NOTE', id: note.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
