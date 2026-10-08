import React from 'react'

const Card = (props) => {

    console.log(props)

    return (

        <div>

             <a href={props.elem.url} target='_blank'>
                <div className=''>
                    <div className='h-40 w-44 '>
                        <img className='h-full object-cover rounded-xl' src={props.elem.download_url} alt="" />
                    </div>

                    <h2 className='font-bold text-lg'>{props.elem.author}</h2>
                </div>
            </a>

        </div>
        
           
        
    )
}

export default Card
