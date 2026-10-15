import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-4 bg-emerald-900'>

        <h2 className='font-bold text-xl'>CodewithOmkar</h2>

        <div className='flex gap-8 font-'>

            <Link className='font-bold text-lg' to='/'>Home</Link>
            <Link className='font-bold text-lg' to='/about'>About</Link>
            <Link className='font-bold text-lg' to='/courses'>Courses</Link>
            <Link className='font-bold text-lg' to='/product'>Product</Link>

        </div>
    </div>
  )
}

export default Navbar
