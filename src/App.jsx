
import React, { useState, useDeferredValue } from 'react';

const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

function List({ input }) {
  const filtered = bigList.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <ul>
      {filtered.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>useDeferredValue Example (JS)</h1>
      <input
        type="text"
        placeholder="Type to filter a big list..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          marginBottom: '1rem',
          fontSize: '1rem',
        }}
      />
      <List input={deferredInput} />
    </div>
  );
}

