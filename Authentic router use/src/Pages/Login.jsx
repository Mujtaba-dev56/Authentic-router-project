import React from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
import Register from './Register'
const Login = () => {
  return (
    
    <> 
     <nav className='navi'>
     {/* <Link to={"/Register"}> Register</Link> */}

{/* <Link to ={"/"} >Home</Link> */}

    </nav>

    <div className='login'>
        <h2> Login Page</h2>
    <input type="text"    placeholder='Enter your Email' />
    <input type="text" placeholder='Enter your Password'/>
    <button>Login</button>
    
    
    
     </div>
    
    
    
    </>
  )
}

export default Login