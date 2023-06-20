import React from 'react'
import "./style.css"

// common button which is used for whole product there is two buttons if outlined true export outlined button else export normal filled button 

function Button({ text, onClick, outlined }) {
  return (
    
    <button className={outlined ? "outlined" : "btn"} onClick={() => onClick()}>{text}</button>
  )
}

export default Button; 
