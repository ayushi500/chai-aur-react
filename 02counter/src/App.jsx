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
    
    //counter++;
    if(counter<=20){  //stop here if counter > 20
      
    setCounter((prevCounter)=>prevCounter+1)   //setCounter((prevCounter)=>{})->setCounter returns a call back
    setCounter((prevCounter)=>prevCounter+1)   //setCounter((prevCounter)=>{})->setCounter returns a call back
    setCounter((prevCounter)=>prevCounter+1)   //setCounter((prevCounter)=>{})->setCounter returns a call back
    setCounter((prevCounter)=>prevCounter+1)   //setCounter((prevCounter)=>{})->setCounter returns a call back
    setCounter((prevCounter)=>prevCounter+1)   //setCounter((prevCounter)=>{})->setCounter returns a call back
    /*prevCounter is the last updated state
     jo call back ke through aata hai,wha pe complete execution 
     hone ke baad hi doosra call hota hai and wha pe proper update hota hai
    */


    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1) 

     /** Interview Question
      * 
    Agr humne setCounter() function baar-baar call kr diya to value 5 ke baad kya ho jaayegi means btn click krte 
    hi value 6 hogi,7 hogi,8 hogi,9 hogi,ya 10 hojaayegi? 

    only become 6=>value by 1 hi increase hogi addValue() btn click krne se
    NEECHE DEKHO
    */
    
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


/**INTERVIEW QUESTION
 * 
 * 
 *
 When React runs these lines,
it doesn’t update the value right away each time.
It remembers all these updates ,it collect them in batches and applies them together later.

But — every line still sees the old value (5).

So it’s like:

setCounter(5 + 1)
setCounter(5 + 1)
setCounter(5 + 1)
setCounter(5 + 1)
setCounter(5 + 1)

React applies the last one → result = 6 ✅
(so only +1, not +5)


if you want it to increase 5 times:

You must tell React to use the latest value each time, like this:
setCounter(prev => prev + 1)
setCounter(prev => prev + 1)
setCounter(prev => prev + 1)
setCounter(prev => prev + 1)
setCounter(prev => prev + 1)

5 → 6 → 7 → 8 → 9 → 10



When multiple setState (or setCounter) calls use the same state
variable, React batches them and uses the same old value(5) i.e it does not update counter immediately.,  
i.e counter is still 5 inside this same function.So the final update happens only once.
  To ensure each update uses the latest value, use the functional 
  form of setState — setCounter(prev => prev + 1).
 */




  /**
   * useState() jitne bhi updates bhejne hain UI me,unko batches me bhejta hai
   * //setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1) 
    they are updating the same counter and saara jo counter update ho rha hai,wo same hi to 
    kaam hi kr rha hai
   */