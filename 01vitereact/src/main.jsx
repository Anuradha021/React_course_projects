import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       taregt :'_blank'
//   },
//   Children:'click me to visit google'

// }
const anotherElement=(
  <a href='https://google.com' target='_blank'>visit here </a>
)
const anotheruser = "Anuradha"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google ',
  anotheruser
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
reactElement
 
)
