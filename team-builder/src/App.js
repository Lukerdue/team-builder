import './App.css';
import React, { useState } from 'react';
import Data from './dummyData';
import CardWrapper from './components/CardWrapper';
import Inputs from './components/inputs'

const initialValue = {
  name: "",
  role: "",
  bio: "",
  img: ""
}
const initialTeam = Data
function App() {

  const [team, setTeam] = useState(initialTeam);
  const [newMember, setNewMember] = useState(initialValue);

  function onVisiboo(evt){
    evt.preventDefault()
    document.querySelector('.form').setAttribute('id', 'visible')
  }

  function change(evt){
    const key = evt.target.name;
    const value = evt.target.value;
    setNewMember({...newMember, [key]: value})
  }
  function onSubmit(evt){
    evt.preventDefault();
    setTeam([...team, newMember]);
  }
  return (
    <div className="App">
      <h1>Meet Our Team!</h1> 
      <button onClick={onVisiboo}>Add a Team Member</button>
      <Inputs change={change} initialValue={newMember} onSubmit={onSubmit}/>
      <CardWrapper team={team}/>
    </div>
  );
}

export default App;
