import { useState } from 'react';
import './App.css'
import {Button, Label, RadioButton, TextBox }from 'component-library';
import { Labelbutton } from 'component-library';

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
        <h2>Label</h2>
        <Label >test</Label>
      </div>
      <div>
        <h2>Text Box</h2>
        <TextBox></TextBox>
      </div>
      <h1>Molecules</h1>
      <div>
        <h2>Button with Label</h2>
        <Labelbutton LabelText='Label text' ButtonText='Button Text' onClick={() => alert('Label button clicked!')}/>
      </div>
    </div>
    
  )

}

const sandboxStateObj = {
radioButtonValue: false
}

export default App;
