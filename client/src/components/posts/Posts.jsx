import React from "react";
import Post from "../post/Post";
import "./posts.css";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p, idx) => (
        <Post key={idx} post={p} />
      ))}
    </div>
  );
}

export default Posts;
