import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

// const anotherElement = {
//   <h1>hsiai</h1>
// }
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google'
);


ReactDom.createRoot(document.getElementById('root')).render(
    // <App /> 
    reactElement
)
