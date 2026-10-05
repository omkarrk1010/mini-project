import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("form submitted")
  }

  return ( // only using submitHanlder can cause the function to be executed only for fratction of second
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>   
        <input placeholder='Enter your name' type='text' required></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
