import React from 'react'
import { NavLink } from 'react-router-dom'

const MyLinks1 = () => {
  let token = localStorage.getItem("token")
  return (
      <div>
          <NavLink to="/product/create" style={{marginRight: "20px"}}>Product Create</NavLink>
          <NavLink to="/product" style={{marginRight: "20px"}}>Product </NavLink>
          <NavLink to="/user" style={{marginRight: "20px"}}>User </NavLink>
          <NavLink to="/user/create" style={{marginRight: "20px"}}>User Create</NavLink>
          <NavLink to="/review/create" style={{marginRight: "20px"}}>Review Create</NavLink>
          <NavLink to="/admin/register" style={{marginRight: "20px"}}>Admin Register</NavLink>
          <NavLink to="/admin/login" style={{marginRight: "20px"}}>Admin Login</NavLink>
         {token ? (<NavLink to="/admin/my-profile" style={{marginRight: "20px"}}>Admin Profile</NavLink>) : null} 
          <NavLink to="/admin/logout" style={{marginRight: "20px"}}>Admin Logout</NavLink>
          <NavLink to="/admin/update-profile" style={{marginRight: "20px"}}>Admin Update profile</NavLink>
          <NavLink to="/admin/update-password" style={{marginRight: "20px"}}>Admin Update Password</NavLink>
    </div>
  )
}

export default MyLinks1