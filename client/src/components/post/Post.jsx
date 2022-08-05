import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img className="postImg" src="/assets/blog-1.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link className="link" to="/post/1">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quaerat
        nisi facilis fuga, odio quae molestiae iste magni. Voluptatibus
        perspiciatis aliquam rem ipsa explicabo dolores tenetur dignissimos
        voluptatem natus numquam! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Natus quaerat nisi facilis fuga, odio quae molestiae
        iste magni. Voluptatibus perspiciatis aliquam rem ipsa explicabo dolores
        tenetur dignissimos voluptatem natus numquam! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Natus quaerat nisi facilis fuga, odio
        quae molestiae iste magni. Voluptatibus perspiciatis aliquam rem ipsa
        explicabo dolores tenetur dignissimos voluptatem natus numquam!
      </p>
    </div>
  );
}

export default Post;
