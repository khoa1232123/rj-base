import React, { useCallback, useEffect, useState } from "react";
import { filterPostCats, getAllPosts } from "../data";
import { IkoButton, IkoInput, IkoTitle } from "../ikoComponents";
import IkoCheckBox from "../ikoComponents/IkoCheckBox";

const SidebarBlogs = ({ setPostFilter }) => {
  const initFilter = {
    search: "",
    category: [],
  };

  const [sidebarFilter, setSidebarFilter] = useState(false);

  const [filter, setFilter] = useState(initFilter);

  const filterSearch = (e) => {
    setFilter({
      ...filter,
      search: e.target.value,
    });
  };

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
    let posts = getAllPosts();
    posts = posts.filter((e) => {
      return (
        e.title.toLowerCase().indexOf(filter.search.trim().toLowerCase()) >= 0
      );
    });

    if (filter.category.length > 0) {
      posts = posts.filter((e) => {
        const check = e.postCats.find((cat) => filter.category.includes(cat));
        return check !== undefined;
      });
    }
    setPostFilter(posts);
  }, [filter, setPostFilter]);

  useEffect(() => {
    updatePosts();
  }, [updatePosts]);

  const clearFilter = () => {
    setFilter(initFilter);
  };

  return (
    <>
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
        className={`products__filter__widget ${sidebarFilter ? "active" : ""}`}
      >
        <div
          className="products__filter__widget__close mobile"
          onClick={() => setSidebarFilter(false)}
        >
          <i className="fas fa-times"></i>
        </div>
        <IkoTitle size={24}>Search</IkoTitle>
        <div className="products__filter__widget__content">
          <IkoInput placeholder="Search..." onKeyUp={(e) => filterSearch(e)} />
        </div>
        <IkoTitle size={24}>Post Categories</IkoTitle>
        <div className="products__filter__widget__content">
          {filterPostCats.map((item, index) => (
            <p key={index} className="products__filter__widget__content__item">
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
    </>
  );
};

export default SidebarBlogs;
