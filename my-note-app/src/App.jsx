import { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';

function App() {

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    console.log(storedNotes);
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, description) => {
    const newNote = { title, description };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Note Book</h1>
      <SearchBar onSearch={handleSearch} onAddNote={addNote} totalCount={notes.length} resultCount={filteredNotes.length} />
      <NoteList notes={filteredNotes} onDelete={deleteNote} />
    </div>
  );
}

export default App;
