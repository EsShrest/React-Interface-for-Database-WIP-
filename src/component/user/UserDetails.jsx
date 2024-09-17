import React from 'react'
import { url } from '../../constant'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserDetails = ({ item, getData }) => {

    let navigate = useNavigate()


    const handleDelete = (id) => {
        return (e) => {
            try{
                let result = axios({
                    url: `${url}/product/${id}`,
                    method: "delete"
                })
                getData()

                toast.success(result.data.message)
            }
            catch(error){
                // toast.error(error.response.data.message)
            }
        }
    }

    const handleUpdate = (id) => {
        return (e) => {
            try{
                navigate(`/user/update/${id}`)
            }
            catch{
                console.log("Error")
            }
        }
    }

    return (
        <div
            style={{ border: "solid red 3px", marginBottom: "20px" }}>
            <p>Name : {item.name}</p>
            <p>Password : {item.password}</p>
            <p>Phonenumber : {item.phoneNumber}</p>
            <p>Email : {item.email}</p>
            <p>Gender : {item.gender}</p>
            <button onClick={handleUpdate(item._id)} style={{marginRight: "20px"}}>Update</button>
            <button onClick={handleDelete(item._id)} style={{marginRight: "20px"}}>Delete</button>
        </div>
    )
}

export default UserDetails
