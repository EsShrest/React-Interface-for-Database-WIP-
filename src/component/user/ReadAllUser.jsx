import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../constant';
import UserDetails from './UserDetails';

const ReadAllUser = () => {
    let [users,setUsers] = useState([])


    const getData = async() => {
        try {
            let result = await axios({
                url: `${url}/user`,
                method: "get"
            })
            setUsers(result.data.result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
            {users.map((item, i) => {
                return (<UserDetails item={item} key={item._id} getData={getData}></UserDetails>)
            })}
        </div>
    )
}

export default ReadAllUser
