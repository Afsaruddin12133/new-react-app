import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
     <div>
        <Link to="profile">Profile</Link> | 
        <Link to="settings">Settings</Link>
     </div>
     <Outlet/>
    </div>
  )
}
