import React, { useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
const Register = () => {
  
  return (
    <>
    
  
    <div className='Reg'>
        <h2>Registeration Form</h2>
        <input type="text" placeholder='Enter your First Name' />
        <input type="text" placeholder='Enter your Second Name' />
        <input type="text" placeholder='Enter your Instituition name '/>
        <input type="text" placeholder='Enter your Degree Name'/>
        <input id='mail' type="email"  placeholder='Enter your Email'/>
        <input id='pass' type="password" placeholder='Enter Password '/>
       <button>Register</button>

    </div>
     </>
  )
}

export default Register