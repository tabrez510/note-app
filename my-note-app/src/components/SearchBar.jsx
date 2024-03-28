// components/SearchBar.jsx
import { useState } from 'react';

function SearchBar({ onSearch, onAddNote, totalCount, resultCount }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      onAddNote(title, description);
      setTitle('');
      setDescription('');
    }
  };

  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <input type="text" onChange={handleSearch} placeholder="Search by title" />
        <p>Total Notes: {totalCount}</p>
        <p>Showing {resultCount} results</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '30vw'}}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{margin: '10px'}}/>
        <textarea rows={4} cols={32} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={{margin: '10px'}} />
        <button onClick={handleSubmit} style={{margin: '10px'}}>Add Note</button>
      </div>
    </div>
  );
}

export default SearchBar;

