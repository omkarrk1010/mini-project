// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const[a,setA] = useState(20)

//   let b = 1;

//   function changeNum(){
//     setA(b)
//   }
    
//   return (
//     <div>

//       <h1> value of a is {a} </h1>
//       <button onClick={changeNum}>Click</button>


//     </div>
//   )
// }

// export default App
  
// useSTate
// import React from 'react'
// import { useState } from 'react'


// const App = () => {

//   const[num, setnum] = useState(0)

//   function IncreaseNum(){
//     setnum(num+1)
//   }
//   function DecreaseNum(){
//     setnum(num-1)

//   }

//   function JumpNum(){
//     setnum(num+5)
//   }

//   return (
//     <div>
//        <h1>{num}</h1>
//       <button onClick={IncreaseNum}>increase</button>
//       <button onClick={DecreaseNum}>decrease</button>
//       <button onClick={JumpNum}>Jump by 5</button>
      
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'

const App = () => {

  const[num,setnum] = useState({user:'omkar',age:18})

  const[a,setA] = useState(10)
  
  const btnClicked = ()=>{
    // new method to update 
    // const newNum = {...num};
    // newNum.user = 'rohit'
    // newNum.age = 25

    // console.log(num.user)
    setnum({user:'rohit',age:19})

    console.log('h1')

    // using prev
    //     // setnum(prev=>({...prev,age:50}))

    //batch update 
    setA(prev=>(prev+1))
    setA(prev=>(prev+1))
    setA(prev=>(prev+1))
  }
 
  return (
    <div>

      <h1>{num.user}, {num.age} </h1>
      <h2>{a}</h2>

      <button onClick={btnClicked}>CLick me </button>
      
    </div>
  )
}

export default App
