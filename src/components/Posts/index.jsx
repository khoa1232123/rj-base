import React from "react";
import { IkoCol, IkoRow } from "../../ikoComponents";
import Post from "./Post";

const Posts = ({ posts, col }) => {
  return (
    <IkoRow>
      {posts.map((item, index) => (
        <IkoCol key={index} col={col ? col : 4}>
          <Post post={item} />
        </IkoCol>
      ))}
    </IkoRow>
  );
};

export default Posts;
