import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-20 py-10 bg-emerald-700 '>

        <div className=''>
          <h3>Sheryains</h3>
        </div>
        
        <div className='flex font-bold gap-3 text-decoration-line : underline'>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>


        </div>
      </div>
  )
}

export default Navbar
