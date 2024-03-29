import React, { useState, useContext } from 'react';
import { NotesContext } from './NotesContext';
import './AddNoteForm.css'; // Form styles

const AddNoteForm = ({ onClose }) => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_NOTE', title, desc });
    setTitle('');
    setDesc('');
    onClose();
  };

  return (
    <div className="add-note-form-container">
      <form className="add-note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Note Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <button type="submit">Add Note</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
