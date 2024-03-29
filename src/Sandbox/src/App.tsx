import { useState } from 'react';
import './App.css'
import {Button, RadioButton, TextBox }from 'component-library';

function App() {

  const [sandboxState, setSandboxState] = useState(sandboxStateObj)

  return (
    <div>
      <h1>Atoms</h1>
      <div>
      <h2>Button</h2>
      <Button onClick={() => alert('click!')} variant='outlined' >test</Button>
      </div>
      <div>
        <h2>Radiobutton</h2>
        <RadioButton checked={sandboxState.radioButtonValue} value={sandboxState.radioButtonValue} onChange={() => {
          sandboxState.radioButtonValue = !sandboxState.radioButtonValue;
          setSandboxState(sandboxState);
        }}></RadioButton>
      </div>
      <div>
        <h2>Text Box</h2>
        <TextBox></TextBox>
      </div>
    </div>
    
  )

}

const sandboxStateObj = {
radioButtonValue: false
}

export default App;
