import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { url } from "../../../constant";

const AdminRegister = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");

  let genderOption = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  let handleSubmit = async (e) => {
    e.preventDefault(); // to prevent default behavior (refresh)
    let data = {
      name,
      email,
      password,
      dob,
      gender,
      };
      data = {
          ...data,
          role: "admin",
      }
    try {
      let result = await axios({
        url: `${url}/web-user`,
        method: "post",
        data,
      });
        toast.success("Mail has been sent");
        setName("")
        setEmail("")
        setPassword("")
        setDob("")
        setGender("male")
    } catch (error) {
        toast.error(error.response.data.message)
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="name">Full Name: </label>
            <input
              type="text"
              id="name"
              placeholder="A"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder=""
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="dob">Dob: </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="male">Gender : </label>
            {genderOption.map((item, i) => {
              return (
                <span key={i}>
                  <input
                    type="radio"
                    id={item.value}
                    value={item.value}
                    checked={gender === item.value}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  ></input>
                  <label htmlFor={item.value}>{item.label}</label>
                </span>
              );
            })}
          </div>
        </fieldset>
        <button type="submit">proceed</button>
      </form>
    </div>
  );
};

export default AdminRegister;
