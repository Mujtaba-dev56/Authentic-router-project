import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute=({user,children}) => {
    if (user) {
        return children
    } else{
        return  <Navigate to={'/register'} />
    }
     }


export default ProtectedRoute;