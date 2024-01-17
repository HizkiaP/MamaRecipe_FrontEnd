// import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'


const ProtectedRoute = ({children}) => {

    const token = localStorage.getItem('token')
    if(!token){
       return <Navigate to='/login' replace />
    }

    return children
  
}

ProtectedRoute.proptypes = {
    children: PropTypes.any
}

export default ProtectedRoute