import React from 'react'
import axios from 'axios'
import { use } from 'react'
import { useState } from 'react'

const App = () => {

  // gives reponse in terms of promise , it takes time to fetch the data

  // function getData(){
  //   const response = fetch('https://jsonplaceholder.typicode.com/posts/1')

  //   console.log(response)
  
  // }

  // to resolve this issue we use asyn and await

  // async function getData(){

  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(response) 

  // }

  // const getData1 = async ()=>{

  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  //   const data = await response.json()
  //   console.log(data)
  //   console.log(response)

  // }


  // axios 

  const[data,setData] = useState([])

  const getData = async()=>{

    const response = await axios.get('https://picsum.photos/v2/list')

    console.log(response)

    setData(response.data)
  }

  return (
    <div>

      <button onClick ={getData}>get Data</button>

      <div>
        {data.map(function(elem,idx){

          return <h3>hello,{elem.author},{idx}</h3>
        })}
      </div>
      
    </div>
  )
}

export default App
 