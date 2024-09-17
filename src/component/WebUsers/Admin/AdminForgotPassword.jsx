import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { url } from "../../../constant";

const AdminForgotPassword = () => {
  let [email, setEmail] = useState("");
  let token = localStorage.getItem("token");

  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault(); 
    let data = {
      email,
    };
    try {
      let result = await axios({
        url: `${url}/web-user/forgot-password`, 
        method: "post",
        data,
      });
        setEmail("")
        toast.success("Link has been set to your email to reset password.")
        navigate("/admin/login")
    } catch (error) {
      console.log(error);
      toast.error(error.message);
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
        </fieldset>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default AdminForgotPassword;

/*
    forgot password
        forgot password (button) click ("/admin/forgot-password")
        component ("/admin/forgot-password") AdminForgotPassword
        AdminForgotPassword
            email 
    
 */
