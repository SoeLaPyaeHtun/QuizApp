import React from 'react'
import useStateContext from '../hooks/useStateContext'
import { Navigate, Outlet } from 'react-router-dom';

const AuthL = () => {

    const {context} = useStateContext();

  return (
   context.participantId === "" ? 
   <Navigate to='/' /> : <Outlet />
    
  )
}

export default AuthL