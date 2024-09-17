import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { url } from "../../../constant";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
    let navigate =useNavigate()
 
  let handleSubmit = async (e) => {
    e.preventDefault(); // to prevent default behavior (refresh)
    let data = {
      email,
      password,
      };
    try {
      let result = await axios({
        url: `${url}/web-user/login`,
        method: "post",
        data,
      });
        console.log(result)
        let token = result.data.data
        localStorage.setItem("token",token)
        navigate("/admin")
    } catch (error) {
        toast.error(error.response.data.message)
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
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
        </fieldset>
        <button type="submit">proceed</button>
        <div onClick={() => {
          navigate("/admin/forgot-password")
        }}>Forgot Password?</div>
      </form>
    </div>
  );
};

export default AdminLogin;
