import React from 'react';

const names = ['Eshan', 'Ear', 'Paul', 'Manisho', 'George'];

function App() {
  return (
    <div>
      {names.filter(name => name.includes('E')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
  );
}

export default App;