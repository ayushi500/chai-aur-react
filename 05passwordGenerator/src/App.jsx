import { useState,useCallback,useEffect,useRef} from 'react'


//we can also create this project without using useEffect

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false) //ya to number lo ya to mt lo
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("")  //setPassword mera password ko change krega


  //useRef Hook
  const passwordRef=useRef(null)  //default value is null

  const passwordGenerator=useCallback(()=>{
   let pass =""
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if (numberAllowed) str+="0123456789"
   if (charAllowed) str+="!@#$%^&*-_+=[]{}~`"
    
   //loop utni baar chlega,jitna hume password ki length chahiye hogi
   for (let i = 1; i <= length; i++){
    let char=Math.floor(Math.random() * str.length+1)
    pass+=str.charAt(char)
   }
  setPassword(pass)
  },[length,numberAllowed,charAllowed]) //in dependencies me kch bhi change hone se agr method run hoga,to useCallback ki wjh se wooptimise ho kr run krega


  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,102)
    window.navigator.clipboard.writeText(password)   //meri react compile hogi js me and jha bhi ye run krega wha window object hoga,but in case of next js,there is server side rendering=>saara code server pe execute hota hai
  },[password])


  // useEffect(setup,dependencies),useEffect(()=>{},[])

    useEffect(()=>{
      passwordGenerator()
    },[length,numberAllowed,charAllowed, passwordGenerator])  //agr passwordGenerator run ho gya,to useEffect usse impact ho jaayega
/*jb -jb component render hoga to passwordgenerator execute hoga and uske trigger hone se
useEffect() execute hoga */
  return (
    <>
      <div className=' w-full max-w-md mx-auto
      shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className=' text-white text-center my-3'>Password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full bg-white py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          /> 
          
           <button 
           onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3
           py-0.5 shrink-0'>copy</button>
          
          
        </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          //className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}   //e.target selects the input
          />
          <label>Length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
         <input
         type="checkbox"
         defaultChecked={numberAllowed}
         id="numberInput"
         onChange={()=>{
          setNumberAllowed((prev)=>!prev)  //prev value jo bhi hai,use reverse kr do
         }}
         
         />
          <label>Numbers</label>  
        </div>

        <div>
         <input
         type="checkbox"
         defaultChecked={charAllowed}
         id="characterInput"
         onChange={()=>{
          setCharAllowed((prev)=>!prev)  //prev value jo bhi hai,use reverse kr do
                                         //it was just like setCounter((prev)=>prev+1),yha every time state change hogi
         }}
         
         />
          <label>Characters</label>
          </div>

       </div>
      
      </div>
    </>
  )
}

export default App

/**
 * Re-render - When React re-runs the component to reflect updated data

useCallback is a memoisation concept
useCallback is a React Hook that helps you avoid unnecessary re-renders by keeping the same function reference between renders
 => useCallback(fn,dependencies) ,here the dependencies are number and character,
 unke checkbox pe tick hote hi,function change ho rha hai

agr ek hi method baar-baar create ho rha h,page ko refresh krne me,so to optimise
that method we use "useCallback"
*/

//******************************TAILWIND CLASS NAME***************************** */
/**it’s Often Used Together with max-w-md
 * w-full max-w-md mx-auto

w-full → Take up as much width as allowed by parent.

max-w-md → But don’t exceed 448px (medium width).

mx-auto → Center horizontally in parent.
 */

/*Dependency ->jiske change hote hi function dobaraa run krega,in this dependency are
length,number,character,setPassword */


/**
 * readOnly->taaki koi iske andar aake kch likh na paaye
 */


/**
 * overflow-hidden is used here to:

Keep the rounded corners clean
Prevent child elements from overflowing outside the border radius
Make the UI look smooth and consistent

overflow-hidden is a Tailwind CSS utility class that controls what 
happens when an element’s content goes outside its container
 (the boundaries of the element).

By default, overflow is visible — meaning content can “spill out” of its box.
But with overflow-hidden, any extra content gets clipped (hidden) instead of overflowing.
 */

/**
 * ✅ When you type something,
the browser triggers an input event.

✅ Inside that event,
event.target = the element that fired the event (<input>).

✅ And event.target.value = whatever text you typed.

So this is pure JavaScript — part of the DOM Event system.
 */


//***************************INPUT TYPE- RANGE****************************** */

/**
 * User changes input (types or drags slider)

onChange fires → (e) => setLength(e.target.value)

setLength() updates the React state variable length

React re-renders the component

The input’s value={length} now reflects the new state

The input box updates on the screen automatically ✨
 */


//STEP BY STEP EXPLANATION OF INPUT TYPE-RANGE
/**
 * Step 1: Initial Render

When page loads,
length = 8

So the slider shows position 8

The heading shows “Password Length: 8”

🖱 Step 2: User moves the slider

Suppose you drag the slider to 15

React does this automatically:

Triggers onChange

(e) => { setLength(e.target.value) }


e = event object
👉 it contains details about this event

e.target = that slider (<input type="range">)

e.target.value = the new slider value → "15" (as a string)

So React runs

setLength("15")


State length becomes "15"

🔁 Step 3: Re-render

Since the state changed, React re-renders the component.

Now {length} shows the new value (15) automatically.

So the heading changes to:

Password Length: 15

 */


//*********************************************************** */
/**
 * useEffect(fn,dependencies)=>dependencies me kch bhi chnge hoga to humara method phir se run kr do
 */