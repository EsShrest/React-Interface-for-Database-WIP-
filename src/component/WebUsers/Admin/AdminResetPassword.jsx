import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { url } from "../../../constant";

const AdminResetPassword = () => {
  let [password, setPassword] = useState("");
  let [params] = useSearchParams()
  let token = params.get("token")

  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault(); // to prevent default behavior (refresh)
    let data = {
      password
    };
    try {
      let result = await axios({
        url: `${url}/web-user/reset-password`,
        method: "post",
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result)
      navigate("/admin/login");
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
            <label htmlFor="password">New Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
        </fieldset>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default AdminResetPassword;
/* 
    update oldPassword
      link => admin/update-oldPassword
      route => admin/update-oldPassword => AdminUpdatePassword
      AdminUpdatePassword
        make a form oldPassword, Password
        make a update button
          hit api
          logout (remove token form localStorage)
          login page
    

 */
