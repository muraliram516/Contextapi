// src/NotesContext.js
import React, { createContext, useReducer } from 'react';

export const NotesContext = createContext();

const initialState = { notes: [] };

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { notes: [...state.notes, { id: Date.now(), title: action.title, desc: action.desc }] };
    case 'DELETE_NOTE':
      return { notes: state.notes.filter(note => note.id !== action.id) };
    default:
      return state;
  }
};

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
