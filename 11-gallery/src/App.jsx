import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data);
    console.log(userData);
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-600 text-xs absolute top-1/2 left-1/2'>Loading ...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      // return idx;
      return <div>
        <Card elem = {elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-10 text-amber-50'>
      {/* <button onClick={() => {
        getData();
      }}
        className='bg-emerald-700 rounded-xl p-1 active:scale-95' >
        Get Data
      </button> */}
      <div className='flex flex-wrap h-[75%] gap-4'>

        {printUserData}

        {/* {userData.map(function(elem,idx){
          return <div>
            <img src={elem.download_url} alt="" />
          </div>
        })} */}

      </div>

      <div className='flex justify-center items-center gap-4 p-4'>
        <button
          onClick={function () {
            setUserData([])
            if (index > 0) setIndex(index - 1);

          }} className='bg-amber-400 active:scale-95 px-4 py-2 rounded text-black font-semibold'>Prev</button>

          <h3>Page {index} </h3>
        <button onClick={function () {
          setUserData([])
          setIndex(index + 1)
        }} className='bg-amber-400 active:scale-95 px-4 py-2 rounded text-black font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App
