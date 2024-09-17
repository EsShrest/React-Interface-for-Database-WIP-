import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogout = () => {
    let navigate = useNavigate()
    localStorage.removeItem("token")
    useEffect(() => {
        navigate("/")
    })


  return (
    <div>
      
    </div>
  )
}

export default AdminLogout
