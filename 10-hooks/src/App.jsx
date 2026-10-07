// 

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { use } from 'react'

const App = () => {

  const[a,setA] = useState(0)
  const[b,setB] = useState(0)

  function changeA(){

    setA(a+1)
    console.log('a is changing')

  }

  function changeB(){

    setB(b-1)
    console.log('b is changing')

  }

  useEffect(function(){

    console.log('useEffect is running ...')

  },[a])

  return (
    <div>

      <h1>{a},{b}</h1>
      

      <button onClick = {()=>{
        changeA()

      }}>change A</button>
      <button onClick = {()=>{

        changeB()
        
      }}>change B</button>
      
    </div>
  )
}

export default App
