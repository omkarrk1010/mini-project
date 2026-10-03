import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
  const users = [

    { image: "https://i.pinimg.com/736x/28/ae/ee/28aeee4f6ea1f9695b309ce1229e455f.jpg" ,
      id : 1,
      text : "Prime Customers, that have access to bank Credit and are satisfied with the current product"},
    { image: "https://i.pinimg.com/736x/5a/56/b4/5a56b49f6e0f9dc2afe0a0278a3bd358.jpg" ,
      id: 2,
      text : "Prime Customers, that have access to bank Credit and are satisfied with the current product"},
    { image: "https://i.pinimg.com/736x/20/27/81/2027810ac2e13fb613f981a17670ffb6.jpg" ,
      id : 3,
      text : "Customers from near-prime and sub-prime segments with no access to bank credit"},
    { image: "https://i.pinimg.com/736x/20/27/81/2027810ac2e13fb613f981a17670ffb6.jpg" ,
      id : 4,
      text : "Customers from near-prime and sub-prime segments with no access to bank credit"},
    { image: "https://i.pinimg.com/736x/20/27/81/2027810ac2e13fb613f981a17670ffb6.jpg" ,
      id : 5,
      text : "Customers from near-prime and sub-prime segments with no access to bank credit"}
    ]

  return (
    <div>
      <Section1 users = {users} />
      <Section2 />
    </div>
  )
}

export default App
