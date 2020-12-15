import './App.css';
import React, { useState } from 'react';
import Data from './dummyData';
import CardWrapper from './components/CardWrapper'

const initialTeam = Data
function App() {
  const [team, setTeam] = useState(initialTeam);

  return (
    <div className="App">
      <h1>Meet Our Team!</h1> 
      <CardWrapper team={team}/>
    </div>
  );
}

export default App;
