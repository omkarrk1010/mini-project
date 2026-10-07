import React from 'react'

const App = () => {

  // store in string format

  // const user = {
  //   name : 'omkar',
  //   age: 18,
  //   city: 'mumbai'
  // }

  // // localStorage.setItem('user',user)

  // localStorage.setItem('user',JSON.stringify(user))
  // // converts into string JSON.stringify
 
  // to access the stored data

  const user = localStorage.getItem('user')
  console.log(user)
  // to convert again in the object format 

  const user1 = localStorage.getItem('user')

  console.log(JSON.parse(user1))

  return (
    <div>

      App
      
    </div>
  )
}

export default App
