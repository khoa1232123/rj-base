import React, { useState } from "react";
import { Posts, TitleHead } from "../components";
import { getAllPosts } from "../data";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Blogs = () => {
  const [postFilter, setPostFilter] = useState(getAllPosts());

  const initFilter = {
    category: [],
    size: [],
  };

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.path],
          });
          break;

        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.path] });
          break;

        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCat = filter.category.filter((e) => e !== item.path);
          setFilter({
            ...filter,
            category: newCat,
          });
          break;

        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.path);
          setFilter({ ...filter, size: newSize });
          break;

        default:
          break;
      }
    }
  };

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
