import React from "react";
import "./singlePost.css";
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="/assets/blog-1.jpg" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :<b>Rabbani</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
          architecto cupiditate, incidunt corporis est placeat quod porro hic
          quam odio temporibus perferendis ipsum doloremque error illo inventore
          minus expedita? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nam atque ex aliquam officiis ullam reprehenderit, sint unde,
          aliquid, quisquam neque illo. Perferendis porro atque consequuntur
          rerum mollitia, excepturi fugit exercitationem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nam atque ex aliquam officiis ullam
          reprehenderit, sint unde, aliquid, quisquam neque illo. Perferendis
          porro atque consequuntur rerum mollitia, excepturi fugit
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nam atque ex aliquam officiis ullam reprehenderit, sint unde,
          aliquid, quisquam neque illo. Perferendis porro atque consequuntur
          rerum mollitia, excepturi fugit exercitationem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nam atque ex aliquam officiis ullam
          reprehenderit, sint unde, aliquid, quisquam neque illo. Perferendis
          porro atque consequuntur rerum mollitia, excepturi fugit
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nam atque ex aliquam officiis ullam reprehenderit, sint unde,
          aliquid, quisquam neque illo. Perferendis porro atque consequuntur
          rerum mollitia, excepturi fugit exercitationem.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
