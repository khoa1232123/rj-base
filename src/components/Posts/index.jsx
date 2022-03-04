import React, { memo } from "react";
import { IkoCol, IkoRow } from "../../ikoComponents";
import Post from "./Post";

const Posts = ({ posts, col, mdCol, smCol }) => {
  return (
    <IkoRow>
      {posts.map((item, index) => (
        <IkoCol
          key={index}
          col={col ? col : 4}
          mdCol={mdCol ? mdCol : 6}
          smCol={smCol ? smCol : 12}
        >
          <Post post={item} />
        </IkoCol>
      ))}
    </IkoRow>
  );
};

export default memo(Posts);
