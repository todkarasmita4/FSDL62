import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Simple career data with categories for easier filtering
  const careers = [
    { name: 'Software Engineer', category: 'Technology' },
    { name: 'Data Scientist', category: 'Technology' },
    { name: 'Graphic Designer', category: 'Creative' },
    { name: 'Project Manager', category: 'Business' },
    { name: 'UX/UI Designer', category: 'Creative' },
    { name: 'Marketing Specialist', category: 'Business' }
  ];

  // Function to filter careers based on the user's input
  const getSuggestions = () => {
    const filtered = careers.filter((career) => 
      career.category.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filtered);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Career Finder</h2>

      <input
        type="text"
        placeholder="Enter career category (e.g., Technology)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '10px' }}
      />

      <button onClick={getSuggestions} style={{ padding: '10px', cursor: 'pointer' }}>
        Get Suggestions
      </button>

      <div>
        <h3>Suggested Careers:</h3>
        {suggestions.length > 0 ? (
          <ul>
            {suggestions.map((career, index) => (
              <li key={index}>{career.name}</li>
            ))}
          </ul>
        ) : (
          <p>No suggestions available. Try a different category.</p>
        )}
      </div>
    </div>
  );
};

export default App;
