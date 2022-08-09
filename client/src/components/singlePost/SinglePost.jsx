import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./singlePost.css";

import { Context } from "../../context/Context";
const PF = "http://localhost:5000/images/";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${path}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post && <img className="singlePostImg" src={PF + post.photo} alt="" />}
        {updateMode ? (
          <input
            type="text"
            className="singlePostTitleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                  title="Update Post"
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                  title="Delete Post"
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            type="text"
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
