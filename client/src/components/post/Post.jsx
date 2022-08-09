import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
const PF = "http://localhost:5000/images/";

function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, idx) => (
            <span key={idx} className="postCat">
              {c.name}
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link className="link" to={`/post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;
