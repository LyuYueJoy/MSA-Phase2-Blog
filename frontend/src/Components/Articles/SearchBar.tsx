import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search articles..."
        style={{ padding: '0.5rem', width: '100%' }}
      />
      <button onClick={handleSearch} style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
