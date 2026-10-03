import React from 'react'
import RightIcon from './RightIcon'
import  { MoveRight } from 'lucide-react'
import RightCardContent from './RightCardContent'


const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative rounded-4xl w-80'>

       <img className='h-full w-full object-cover 'src= {props.image}/>
       <RightCardContent text = {props.text} id = {props.id} />
             
    </div>
  )
}

export default RightCard
