import React from 'react';

function App() {
  // This is a javascript array
  const list = ['Shopping', 'gym', 'Visit friend'];

  // This is JSX which is a mix of ui and logic
  const listElement = (
    <ul>
      {list.map(todo => <li key={todo} tabindex="0">{todo}</li>)}
    </ul>
  );
  
  return (
    <div>
      {listElement}
    </div>
  );
}

export default App;
