import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate = useNavigate()
  return (
    <div>
         {/* <button onClick = {()=>{
          
          navigate('/about')

         }}className='px-4 py-4 m-2 bg-red-600 rounded-2xl active:scale-95'>return to About page</button> */}
        <h1>Home</h1>
      
    </div>
  )
}

export default Home
