import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { url } from "../../../constant";

const AdminUpdatePassword = () => {
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  let token = localStorage.getItem("token");

  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault(); // to prevent default behavior (refresh)
    let data = {
      oldPassword,
      newPassword,
    };
    try {
      let result = await axios({
        url: `${url}/web-user/update-password`,
        method: "patch",
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
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
            <label htmlFor="oldPassword">Old Password: </label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <label htmlFor="newPassword">New Password: </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            ></input>
          </div>
        </fieldset>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default AdminUpdatePassword;
/* 
    update oldPassword
      link => admin/update-oldPassword
      route => admin/update-oldPassword => AdminUpdatePassword
      AdminUpdatePassword
        make a form oldPassword, newPassword
        make a update button
          hit api
          logout (remove token form localStorage)
          login page
    

 */
