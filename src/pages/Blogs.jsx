import React, { useState } from "react";
import { Posts, TitleHead } from "../components";
import SidebarBlogs from "../components/SidebarBlogs";
import { getAllPosts } from "../data";
import { IkoCol, IkoContainer, IkoRow } from "../ikoComponents";

const Blogs = () => {
  const [postFilter, setPostFilter] = useState(getAllPosts());

  return (
    <div className="blogs">
      <TitleHead title="Blogs" />
      <IkoContainer>
        <IkoRow>
          <IkoCol col={3} mdCol={12}>
            <SidebarBlogs setPostFilter={setPostFilter} />
          </IkoCol>
          <IkoCol col={9} mdCol={12} className="post-list">
            <Posts posts={postFilter} col={6} />
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Blogs;
