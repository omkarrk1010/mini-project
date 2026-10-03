import React from 'react'

const RightIcon = (props) => {
  return (
    <div className='rounded-full h-10 w-10 bg-white flex justify-center items-center p-4'>
      <span className='p-4'>{props.elem}</span>
    </div>
  )
}

export default RightIcon
