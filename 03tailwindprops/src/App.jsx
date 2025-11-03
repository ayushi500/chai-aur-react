import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

//image tag closing hona chahiye=><img/>
//mb-margin bottom

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind test</h1>
    <Card username="chai aur code" btnText="click me"/> //jo bhi value card me de denge,wo props i.e present in card.jsx function Card(props) me show ho jaayegi
    <Card username="hitesh" btnText="visit me"/>  //agr card repeat krna ho
    
    </>
  )
}

export default App



/**
 we can also give arr and object inside Card
 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

//image tag closing hona chahiye=><img/>
//mb-margin bottom

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:21
  }
  let newArr=[1,2,3,4]
  

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind test</h1>
    <Card username="chai aur code" someObject={myObj} someArr={newArr}/> //jo bhi value card me de denge,wo props i.e present in card.jsx function Card(props) me show ho jaayegi
    <Card username="hitesh"/>  //agr card repeat krna ho
    
    </>
  )
}

export default App
 */