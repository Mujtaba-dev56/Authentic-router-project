import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
   <>
   <nav className='navi'> 
 <Link to={"/register"}>Register</Link>
 <Link to={"/login"}>Login</Link>
 <Link to={"/"}>  Home </Link>
 <Link to={"/products"}>Products</Link>
 <Link to={"/Services"} >Services</Link>
    
  
     </nav>
   
   </>
  )
}

export default Nav