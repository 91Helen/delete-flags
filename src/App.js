import './App.css';
import { useState } from 'react';
import {testing} from './testing'


function App() {
  const [flags, setFlags] = useState(testing)
  const removeFlags = (number) => {
    let removeEachItem = flags.filter(name => name.number !==number)
    setFlags(removeEachItem)
  }
 
  return (
  <div >
  {flags.map((element => {
    const {number, name, picture} = element;
    return(
      <div>
        <div className='container'>
       <h2>{number} - {name}</h2>
        </div>

        <div className='container'>
          <img src={picture} width="1000px" height="500px" alt="flags"/>
        </div>

        <div className='container'>
          <button onClick={() => removeFlags(number)}>remove</button>
        </div>
      </div>
    )
  }))}

  <div className='container'>
    <button onClick={() => setFlags([])}>remove all flags</button>
  </div>
  </div>
    
  );
}

export default App;
