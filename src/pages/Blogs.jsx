import React from "react";
import { Posts, TitleHead } from "../components";
import { getAllPosts } from "../data";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Blogs = () => {
  return (
    <div className="blogs">
      <TitleHead title="Blogs" />
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <IkoTitle center>Blogs</IkoTitle>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol col={3}>Sidebar</IkoCol>
          <IkoCol col={9}>
            <Posts posts={getAllPosts()} col={6} />
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Blogs;
