import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { url } from "../../../constant";

const AdminProfileUpdate = () => {
  let [name, setName] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");
  let token = localStorage.getItem("token");

  let navigate = useNavigate();

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
      dob,
      gender,
    };
    try {
      let result = await axios({
        url: `${url}/web-user/update-profile`,
        method: "patch",
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/admin/my-profile`);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  let getAdminProfile = async () => {
    try {
      let result = await axios({
        url: `${url}/web-user/my-profile`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = result.data.result
      setName(data.name)
      setDob(data.dob)
      setGender(data.gender)
    } catch (error) {}
  };
  useEffect(() => {
    getAdminProfile();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="name">Full Name: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default AdminProfileUpdate;

/*
    Update profile
    make update profile button on my profile when clicked change link to admin/profile-update
    route admin/profile-update UpdateProfile
    UpdateProfile
        make a form mail*, password*, email* (This should not be given to change in this way.)
        button => update (hit api)
        for data populate => hit myProfile api on page load and set data 

 */
