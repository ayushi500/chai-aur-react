import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

//JSX ka syntax reactElement me convert ho jaata by parsing
//agr main directly reactElement pass kr du,so humara ek step bhi bch jaayega


// const ReactElement={
//     type:'a',  //tells ki element kis type ka h
//     props:{    //props->properties is object
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

const anotherElement=(
    <a href='https://google.com' target='_blank'>Visit google</a>
)


//hum yha pe reactElement react ke hisaab se bnayenge,khud ke hisaab se 
// nhi,jaise phele bnaya tha
//************************************* */

//agr mujhe or text React.createElement me inject krne hai,so end me inject krte hain
const anotherUser="chai aur react"
const ReactElement=React.createElement(  /*in this first parameter is expected as tag,
second paramter is  object->This object adds properties just like setAttribute, 
third parameter is direct text */
    'a',
    {href:'https://google.com' , target:'_blank'},
    'click me to visit gulugulu',
     anotherUser     //click me to visit guluguluchai aur react
     //yha hum if-else ya direct text nhi add kr skte hain
)



ReactDOM.createRoot(document.getElementById('root'))
.render(
    // <App/>
    //<MyApp />     //MyApp()->aise bhi humara jsx run krega

    //<ReactElement/>  //but it will not work beacuse yha pe function expect kiya ja rha hai,ki hum function pass krenge ,wo execute hoga
    //but yha to object pass ho rha hai       ReactElement is object

    //if we use like this
   // ReactElement  //still it is not working,ab to chl jana chahiye tha-as hum object ko call kr rhe hain
  
   //anotherElement   //Visit google ->na hi amine koi syntax rkha hai,na kch parenthesis use kiye hain,tb bhi
                  //ye run ho gya hai
    ReactElement

                )
/*ye jo render hai,ye kch or expect kr rha tha object me.Jaisa iska function likha 
likha gya hoga,wo koi or object expect kr rha hai,but humne koi or object diya hai
render ko koi aur syntax ka object chahiye,but reactElemnt ke paas koi aur syntax hai

but jb humne anotherElemnt diya,to wo us type ke object me convert ho gya jaisa
render ko chahiye tha
*/
