import React from 'react';

// 1. convert function component to class
// 2. add state, list and date
// 3. add date title
// 4. add timer
// 5. lifecycle event

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
