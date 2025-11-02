import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)    //it is responisble to change the state -> iss change ko UI ke andar propogate kiya jata hai
  //in useState the default state can be anything->{},'',true/false, but here it is 5
  //useState se hume 2 value milti hai ->1-counter , 2-function(setCounter) which is responsible to update counter
 // let counter=5  //this variable will never propogate to UI

  const addValue=()=>{
    
    counter++;
    if(counter<=20){  //stop here if counter > 0
    setCounter(counter)
    }
  }
  const removeValue=()=>{
    counter--;
    if(counter>=0) {  //// ✅ stop here if counter < 0
    setCounter(counter)
    }
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value:{counter}</h2>

     <button
     onClick={addValue}>Add Value</button>
     <br/>
     <button
     onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

//agr kisi bhi button pe action krana hai,so we use on-click

/*humne button bnaya but button ke click se value kewal console me hi 
update ho rhi hai,main UI me ho hi nhi rhi hai,so here we use hooks

** UI updation ko react control krta hai
*/