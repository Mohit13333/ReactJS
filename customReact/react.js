function customRender(reactElement, container) {
//     const domElements=document.createElement(reactElement.type)
//     domElements.innerHTML = reactElement.children
//     domElements.setAttribute('href',reactElement.props.href)
//     domElements.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElements)
// }
const domElement=document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for(const prop in reactElement.props){
   if(prop=='children')continue;
   domElement.setAttribute(prop,reactElement.props[prop])
}
   container.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target: '_blank',
    },
    children:'Click me to visit google'
}
const mainContainer=document.querySelector('#root')
customRender(reactElement, mainContainer)