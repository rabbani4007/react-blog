import React, { useState, useContext } from "react";
import SideBar from "../../components/sidebar/SideBar";
import { Context } from "../../context/Context";
import "./settings.css";
import axios from "axios";
const PF = process.env.IMAGE_PATH;

function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`/users/${user._id}`);
    window.location.replace("/");
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsProfilePicture">
            {user && (
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : PF +
                      (user.profilePicture
                        ? user.profilePicture
                        : "default-user-pic.svg")
                }
                alt=""
              />
            )}
            <label htmlFor="fileInput">
              <i className="settingsProfiePicIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", alignText: "center", marginTop: "20px" }}
            >
              Profile has been updated....
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
}

export default Settings;
