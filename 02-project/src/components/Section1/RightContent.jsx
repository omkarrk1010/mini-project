import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div className='h-full flex gap-10 rounder-4xl overflow-x-auto flex-nowrap w-2/3 p-6'>
      {props.users.map(function (elem) {

        return <RightCard text={elem.text}
          id={elem.id}
          image={elem.image}
        />
      })}
    </div>
  )
}

export default RightContent
