import Chai from "./chai"

//jha bhi curly braces hoga,uske andar jo bhi hoga,hum use curly brace ski trh treat krenge
function App() {
    const username="chai aur code"

  return (
    <>
    <h1>chai aur react {username}</h1>     
    <b>ayushi</b>
   <Chai/>
   </>
  )
}

export default App

//{username} is evaluated expression i.e final outcome