// import React from 'react'
import { Navigate } from 'react-router-dom'
// import PropTypes from 'prop-types'

const PublicRoute = ({children}) => {
  
    const token = localStorage.getItem('token')
    if(token){
       return <Navigate to='/main' replace />
    }

    return children
  
}

export default PublicRoute