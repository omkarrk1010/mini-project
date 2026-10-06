import React from 'react'
import { useState } from 'react'

const App = () => {

  const[title,settitle] = useState('')

  const submitHandler= (e)=>{
    
    e.preventDefault()
    console.log('form submitted')

  }
  return (
    <div>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}> 
        <input 
        type="text" 
        placeholder='Enter your name' 
        onChange={(e)=>{

          console.log(e.target.value)
          
        }}
        value = {title}
        />
        
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
