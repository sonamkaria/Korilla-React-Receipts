import React, { useState } from 'react';
import './App.css';
import receiptsArr from './receiptsArr';
import Receipts from './components/Receipts';
import Form from './components/Form';


function App() {

  const [receipt, setReceipt] = useState(receiptsArr)
  //create a function that filters the original array according to an input - set
  const findName = (name) => {
    const filteredPerson = receiptsArr.filter((person)=>person.person === name)
    if (name === "") setReceipt(receiptsArr) 
    else setReceipt(filteredPerson)
  }

    return (
      <div className="App">
        <h1>Korrilla Receipts</h1>
        <Form findName={findName} />
        <Receipts receipt={receipt} />


      </div>
    );
  }

  export default App;
