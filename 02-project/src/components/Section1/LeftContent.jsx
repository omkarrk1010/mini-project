import React from 'react'
import { MoveUpRight } from 'lucide-react'
import Herotext from './Herotext'
import Arrow from './Arrow'

const LeftContent = () => {
    return (
        <div className='flex flex-col h-full w-1/3 justify-between'>
            <Herotext />
            <Arrow />
            
        </div>

    )
}

export default LeftContent
