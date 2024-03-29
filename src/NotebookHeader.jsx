import React, { useState, useContext } from 'react';
import { NotesContext } from './NotesContext';
import './NotebookHeader.css'; // Make sure to create and import this CSS file

const NotebookHeader = ({ onAddNoteClick }) => {
  const { state } = useContext(NotesContext);
  const [searchQuery, setSearchQuery] = useState('');

  // Implement the search handler as needed
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // You can filter your notes based on the search query here or pass this up to the parent component
  };

  return (
    <div className="notebook-header">
      <h1 className="notebook-title">NoteBook</h1>
      <input
        type="text"
        placeholder="Search Notes..."
        className="search-notes-input"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="note-stats">
        <span>Total Notes: {state.notes.length}</span>
        <span>Showing: {/* Display the count based on the search result */}</span>
      </div>
      <button className="add-note-btn" onClick={onAddNoteClick}>
        Add New Note
      </button>
    </div>
  );
};

export default NotebookHeader;
