import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

  const[theme,setTheme] = useContext(ThemeDataContext)

  return (
    <div>

        <button onClick={()=>{

            setTheme('Dark');

        }}>Change theme</button>
      
    </div>
  )
}

export default Button
