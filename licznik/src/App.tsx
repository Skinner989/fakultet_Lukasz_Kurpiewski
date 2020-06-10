import React from 'react';
import './App.css';

const App: React.FC = () => {
  const [number,setnumber] = React.useState(0);
  return (
    <div>
      <br></br>
      <button onClick = {()=>setnumber(number-1)}>-</button>
      {' ' + number+ ' '}
      <button onClick = {()=>setnumber(number+1)}>+</button>
      {number > 9 && <h1>{'Prosze zaprzestac klikania!'}</h1>}
    </div>
  );
}

export default App;
