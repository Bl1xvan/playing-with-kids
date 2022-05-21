import React, {useState, useEffect}from 'react';
import './App.css';
import FamilyJSON from './data/data.json'
import Families from './Families'

function App() {

  const [members, setMembers] = useState([]);

  useEffect(()=>{
    setMembers(FamilyJSON.map(family=>family))
  }, [])

  
  return (
    <Families members={members} />
  );
}

export default App;