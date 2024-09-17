import axios from 'axios'
import React, { useState } from 'react'
import { url } from '../../constant'
import { toast } from 'react-toastify'

/*
{
    "name": "samir Balami",
    "email": "sameerbalami08@gmail.com",
    "password":"Password!1234",
    "phoneNumber": "9869024057",
    "gender": "male"  
} 
 */

const UserForm = () => {

    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [phoneNumber,setPhoneNumber] = useState("")
    let [gender, setGender] = useState("male")
    
    let genderOption = [
        {
            label: "Male",
            value: "Male"
        },
        {
            label: "Female",
            value: "female"
        },
        {
            label: "Other",
            value: "other"
        },
    ]

    let handleSubmit = async(e) => {
        e.preventDefault()
        let data = {
            name,
            email,
            password,
            phoneNumber,
            gender,
        }
        console.log(data)

        try {
            let result = await axios({
                url : `${url}/user`,
                method : "post",
                data : data
            })
            setName("")
            setEmail("")
            setPassword("")
            setPhoneNumber("")
            setGender("male")

            toast.success(result.data.message)
        }
        catch (error) {
            toast.error(error.response.data.message)
        }

    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <fieldset>
                  <div>
                      <label htmlFor="name">Name : </label>
                      <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => {
                              setName(e.target.value)
                          }}
                      ></input>
                  </div>
                <div>
                      <label htmlFor="email">Email : </label>
                      <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                              setEmail(e.target.value)
                          }}
                      ></input>
                  </div>
                <div>
                      <label htmlFor="password">Password : </label>
                      <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value)
                          }}
                      ></input>
                  </div>
                <div>
                      <label htmlFor="phoneNumber">Phone Number : </label>
                      <input
                          type="number"
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => {
                              setPhoneNumber(e.target.value)
                          }}
                      ></input>
                  </div>
                  <div>
                      <span htmlFor="male">Gender : </span>
                      {
                          genderOption.map((item, i) => {
                              return <span key={i}>
                                  <input
                                      type="radio"
                                      id={item.value}
                                      value={item.value}
                                      checked={gender === item.value}
                                      onChange={(e) => {
                                          setGender(e.target.value)
                                      }}
                                  ></input>
                                  <label htmlFor={item.value}>{item.label}</label>
                              </span>
                          })
                      }
                  </div>
              </fieldset>
              <button type="submit">send</button>
          </form>
    </div>
  )
}

export default UserForm