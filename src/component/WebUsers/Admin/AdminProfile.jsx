import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { url } from "../../../constant";


const AdminProfile = () => {
    let token = localStorage.getItem("token")
    let [profile, setProfile] = useState({})
    let navigate = useNavigate()
    let getAdminProfile = async () => {
      try {
          let result = await axios({
              url: `${url}/web-user/my-profile`,
              method: "get",
              headers: {
                  Authorization: `Bearer ${token}`,
              }
          });
          setProfile(result.data.data)
        console.log(result)
      } catch (error) {}
    };
    useEffect(() => {
        getAdminProfile()
    },[])
  return (
      <div>
          <p>Full Name: {profile.name}</p>
          <p>Gender: {profile.gender}</p>
          <p>Date of birth: {new Date(profile.dob).toLocaleDateString()}</p>
          <p>Email: {profile.email}</p>
          <p>Role: {profile.role}</p>
          <button onClick={() => {
              navigate("/admin/update-profile")
          }}>Update Profile</button>
    </div>
  )
}

export default AdminProfile

/* 
My-Profile
    link => /admin/my-profile
    route => /admin/my-profile => AdminProfile
    AdminProfile
        hit api on page load (useEffect)
        token => get token from local storage
 */