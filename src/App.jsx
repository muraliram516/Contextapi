import React, { useState } from 'react';
import { NotesProvider } from './NotesContext';
import NotebookHeader from './NotebookHeader';
import AddNoteForm from './AddNoteForm';
import NotesList from './NotesList';
import './App.css'; // Your main styles

const App = () => {
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);

  return (
    <NotesProvider>
      <div className="app">
        <NotebookHeader onAddNoteClick={() => setShowAddNoteForm(true)} />
        {showAddNoteForm && <AddNoteForm onClose={() => setShowAddNoteForm(false)} />}
        <NotesList />
      </div>
    </NotesProvider>
  );
};

export default App;




// // App.js
// import React from 'react';
// import { NotesProvider } from './NotesContext';
// import NotebookHeader from './NotebookHeader.jsx';
// import NotesList from './NotesList'; // Make sure to include your NotesList component
// import AddNoteForm from './AddNoteForm'; // Include your AddNoteForm component

// const App = () => {
//   return (
//     <NotesProvider>
//       <div className="app">
//         <NotebookHeader />
//         <AddNoteForm />
//         <NotesList />
//       </div>
//     </NotesProvider>
//   );
// };

// export default App;
