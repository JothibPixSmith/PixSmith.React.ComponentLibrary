import './App.css'
import {Button, RadioButton }from 'component-library';

function App() {

  return (
    <div>
      <h1>Atoms</h1>
      <div>
      <h2>Button</h2>
      <Button onClick={() => console.log('yo')} variant='outlined' >test</Button>
      </div>
      <div>
        <h2>Radiobutton</h2>
        <RadioButton></RadioButton>
      </div>
    </div>
    
  )

}

export default App
