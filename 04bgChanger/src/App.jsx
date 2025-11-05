import { useState } from "react";


function App() {
  const [color,setColor]=useState("olive") //default color=olive

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
        px-3 py-2 rounded-3xl">
         <button 
         onClick={()=>setColor("red")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"   
         style={{backgroundColor:"red"}}>Red</button> 
         <button 
         onClick={()=>setColor("green")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"   
         style={{backgroundColor:"green"}}>Green</button> 
         <button 
         onClick={()=>setColor("pink")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"   
         style={{backgroundColor:"pink"}}>Pink</button> 
         
         
        </div>
      </div>
      
      
    </div>
  )
}

export default App

//to implement state,we can give style like this=>
 // style={{}}
/*Inline CSS in React (and normal HTML) means applying css styles 
 directly to an element, instead of using a CSS file or a class.(always write in camelCase)
/* style={{backgroundColor:color}} =>hum yha directly color na de kr,variable
injection ke through color denge,as we already uses 2 curly braces so
instead of writing it again like {color},we just write  color
*/

/* onclick in Js handles function 

<button onclick="sayHello()">Click Me</button>

<script>
  function sayHello() {
    alert("Hello! You clicked the button.");
  }
</script>


it is same in react but here we use onClick
it wants function
*/

/**
 * button ko click kiya,phir setColor call ho gya ,setColor ne color ko change 
 * kr diya red color me and then background color change ho gya red me
 */