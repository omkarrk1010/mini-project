import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {

    let navigate = useNavigate()

    return (
        <div className='bg-emerald-800'>

            <button onClick={() => {
                navigate('/');
            }} className='py-4 px-5 m-2 rounded-2xl bg-emerald-500 active:scale-95'>Return to home page</button>

            <button onClick={() => {
                navigate(-1);
            }} className='py-4 px-5 m-2 rounded-2xl  bg-emerald-500 active:scale-95'>Back</button>

            <button onClick={() => {
                navigate(+1);
            }} className='py-4 px-5 m-2 rounded-2xl  bg-emerald-500 active:scale-95'>Next</button>

        </div>
    )
}

export default Navbar2
