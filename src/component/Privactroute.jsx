import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Privactroute({children}) {
  const auth= localStorage.getItem('afsar');
  return auth?children : <Navigate to='/login'/>
}
