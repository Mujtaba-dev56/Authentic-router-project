import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Nav from './Pages/Nav'
import ProtectedRoute from './Pages/ProtectedRoute'
function App() {
   const [user, setuser] = useState(false)

   const login =()=>{
    setuser(true)
   }

   const logout =()=>{
    setuser(false)
   }
  return (
    <>
     
      <BrowserRouter> 
      <Nav />
    <Routes> 

      <Route path='register' element={<Register />} />
      <Route path='login'    element={ <Login  /> }/>

      <Route path='services' element={ <ProtectedRoute  user ={user}> <Services /> </ProtectedRoute>}  /> 
      <Route path='products' element={ <ProtectedRoute user ={user}>  <Products /> </ProtectedRoute>}  />
      <Route path=   "/"     element={ <ProtectedRoute user ={user}>  <Home/>     </ProtectedRoute> } />
      </Routes> 
      
     </BrowserRouter>

    
    </>
  )
}


export default App
