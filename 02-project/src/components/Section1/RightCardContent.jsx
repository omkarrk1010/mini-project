import React from 'react'
import  { MoveRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute p-10 top-0 left-0 h-full w-full flex flex-col justify-between '> 
        <h2 className='rounded-full h-12 w-12 flex text-2xl font-bold items-center bg-white justify-center'>{props.id}</h2>

        <div>
            <p className='text-lg leading-normal text-white mb-10'>{props.text}</p>
            <div className='flex '> 
                <button className='bg-blue-400 text-white rounded-full font-medium px-10 py-2 text-lg'>Satisfied</button>
                <button  className='bg-blue-400 text-white rounded-full font-medium px-4 py-2 text-lg'> <MoveRight /> </button>
            </div>
        </div>

       </div>
  )
}

export default RightCardContent
