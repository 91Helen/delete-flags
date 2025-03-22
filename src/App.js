import './App.css';
import { useState } from 'react';
import { data} from "./data"
import { testing } from "./testing"

function App() {
const [flag,setFlag] = useState(2);
const {id,image,country,language, capital} = (data[flag])

// const [flags, setFlags] = useState(testing)
// const removeFlags = (number) => {
//   let removeEachItem = flags.filter(name => name.number !==number)
//   setFlags(removeEachItem)
// }


const previousButton =() => {
setFlag((flag => {
  flag--;
  if(flag <0 ) {
    return data.length-1;
  }
  return flag
}))
}

const nextButton = () => {
setFlag((flag => {
  flag++;
  if(flag > data.length-1) {
    flag = 0;
  }

  return flag
}))
}

 return (
        <div>

          <div className='container'> <h2>Look at the list of {data.length} flags</h2></div>
    <div className='container'>
     <img src={image} width="1000px" height="500px"/>
    </div>

    <div className='container'>
     <h2>{id} - {country}</h2>
    </div>

    <div>
      <h3 className='container'>Capital: {capital}</h3>
    </div>
    <div className='container'>
    <h3>Language: {language}</h3>
    </div>

    <div className='btn container'>
  <button onClick = {previousButton}>Previous</button>
  <button onClick={nextButton}>Next</button>
  </div>

<div className="container">
<h2>Now look at the list of {data.length} flags and choose the flag of Bruney. Please delete the unnecessary flags. </h2>
  </div>

  </div>

// <div >
// {flags.map((element => {
//   const {number, name, picture} = element;
//   return(
//     <div>
//       <div className='container'>
//      <h2>{number} - {name}</h2>
//       </div>

//       <div className='container'>
//         <img src={picture} width="1000px" height="500px" alt="flags"/>
//       </div>

//       <div className='container'>
//         <button onClick={() => removeFlags(number)}>remove</button>
//       </div>
//     </div>
//   )
// }))}

// <div className='container'>
//   <button onClick={() => setFlags([])}>remove all flags</button>
// </div>
// </div>
  
// );
// }
       )

      
      }

      export default App;
      



