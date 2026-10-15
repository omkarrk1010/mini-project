import React from 'react'

const Navbar = (props) => {

  function btnClick(){
    props.setTheme('Dark')      
  }

  return (
    <div>
        <button onClick = {()=>{
            btnClick();
        }}> set theme</button>
    </div>
  )
}

export default Navbar
