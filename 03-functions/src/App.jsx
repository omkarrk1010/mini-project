// import React from 'react'

// const App = () => {

//   function btnClicked(){

//     console.log("hello world")

//   }
//   return (
//     <div>

//       {/* <h1> hello im omkar </h1>
//       <button onClick={function(elem){
//         console.log("hello")
//       }}> click here</button> */}

//       <input onChange = {function(elem){
//         console.log(elem)
//         // console.log(elem.target) // give the targeted code
//         // console.log(elem.target.value) // give the input value that we are typing 
//       }}
//       type="text"
//       placeholder='Enter your Name' 
//       />
      
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {

  const pageScrolling = (elem)=>{
    if(elem>0){
      console.log("scrolling in same direct")
    }else{
      console.log("scrolling in oposite direction")
    }

  }
  return (
    <div onWheel={(elem) => pageScrolling(elem.deltaY
)}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App
