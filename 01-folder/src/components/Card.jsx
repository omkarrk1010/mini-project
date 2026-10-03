import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (
       
            <div className="card">
                <div className="top">
                    <img src={props.logo} alt="" />
                    <button>Save <Bookmark size = {13}/> </button>
                </div>

                <div className="center">

                    <h3>{props.company} <span>{props.posted}</span></h3>
                    <h2>{props.title}</h2>
                    <div className='tag'>
                        {props.tags.map(function(tag,index){

                            return <h4 key={index}> {tag} </h4>

                        })}
                    </div>

                </div>

                <div className="bottom">
                    <div>
                        <div>
                            <h3>{props.salary}</h3>
                            <p>{props.location}</p>
                        </div>
                    </div>

                    <button>Apply Now</button>
                </div>
            </div>

        
        
    )
}

export default Card
