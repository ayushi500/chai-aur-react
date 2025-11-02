//customRender ka code
function customRender(reactElement,container){  
    /*
    const domElement=document.createElement(reactElement.type)    //<a></a>
    domElement.innerHTML=reactElement.children   //<a>Click me to visit google</a>

    domElement.setAttribute('href',reactElement.props.href)  //<a href="https://google.com">Click me to visit google</a>
    domElement.setAttribute('target',reactElement.props.target)  //<a href="https://google.com" target="_blank">Click me to visit google</a>

   container.appendChild(domElement)
*/


//loop based code
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for (const prop in reactElement.props) {
    if(prop==='children') continue;  //agr prop ke andar children aa jaaye
    domElement.setAttribute(prop,reactElement.props.prop)
    
}
container.appendChild(domElement)


}

const reactElement={
    type:'a',  //tells ki element kis type ka h
    props:{    //props->properties is object
        href:'https://google.com',
        target:'_blank' 
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

//to add reactElement in root i.e div
customRender(reactElement,mainContainer)


/**
 * target="_blank" tells the browser:

“Open this link in a new tab (or new browser window).”

So when you click that link, instead of replacing your current page, a new tab opens and loads the URL.
 */