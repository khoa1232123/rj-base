import React, { memo } from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__img">
        <Link to={`/blogs/${post.id}`}>
          <img src={post.img} alt="" />
        </Link>
      </div>
      <div className="post__content">
        <div className="post__cats">
          {post.postCats.map((item, index) => (
            <div className="post__cats__item" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="post__title">
          <Link to={`/blogs/${post.id}`}>{post.title}</Link>
        </div>
        <Link to={`/blogs/${post.id}`} className="post__btn">
          See More
        </Link>
      </div>
    </div>
  );
};

export default memo(Post);
