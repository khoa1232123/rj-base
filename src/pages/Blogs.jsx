import React, { useCallback, useEffect, useState } from "react";
import { Posts, TitleHead } from "../components";
import { filterPostCats, getAllPosts } from "../data";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";
import IkoCheckBox from "../ikoComponents/IkoCheckBox";

const Blogs = () => {
  const [postFilter, setPostFilter] = useState(getAllPosts());

  const initFilter = {
    category: [],
  };

  const [sidebarFilter, setSidebarFilter] = useState(false);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.label],
          });
          break;

        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCat = filter.category.filter((e) => e !== item.label);
          setFilter({
            ...filter,
            category: newCat,
          });
          break;

        default:
          break;
      }
    }
  };

  const updatePosts = useCallback(() => {
    let temp = getAllPosts();

    if (filter.category.length > 0) {
      temp = temp.filter((e) => {
        const check = e.postCats.find((cat) => filter.category.includes(cat));
        return check !== undefined;
      });
    }
    setPostFilter(temp);
  }, [filter, setPostFilter]);

  useEffect(() => {
    updatePosts();
  }, [updatePosts]);

  const clearFilter = () => {
    setFilter(initFilter);
  };

  return (
    <div className="blogs">
      <TitleHead title="Blogs" />
      <IkoContainer>
        <IkoRow>
          <IkoCol col={3} mdCol={12}>
            <IkoButton
              icon="fas fa-filter"
              outline
              onClick={() => setSidebarFilter(true)}
              color={"green"}
              className="mobile"
              style={{ marginBottom: 20 }}
            >
              Filter
            </IkoButton>
            <div
              className={`products__filter__widget ${
                sidebarFilter ? "active" : ""
              }`}
            >
              <div
                className="products__filter__widget__close mobile"
                onClick={() => setSidebarFilter(false)}
              >
                <i className="fas fa-times"></i>
              </div>
              <IkoTitle size={24}>Post Categories</IkoTitle>
              <div className="products__filter__widget__content">
                {filterPostCats.map((item, index) => (
                  <p
                    key={index}
                    className="products__filter__widget__content__item"
                  >
                    <IkoCheckBox
                      label={item.label}
                      onChange={(input) =>
                        filterSelect("CATEGORY", input.checked, item)
                      }
                      checked={filter.category.includes(item.label)}
                    />
                  </p>
                ))}
              </div>
              <IkoButton onClick={() => clearFilter()}>Clear</IkoButton>
            </div>
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
