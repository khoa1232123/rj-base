import React, { useCallback, useEffect, useState } from "react";
import { filterProductCats, filterProductTags, getAllProducts } from "../data";
import { IkoButton, IkoInput, IkoTitle } from "../ikoComponents";
import IkoCheckBox from "../ikoComponents/IkoCheckBox";

const SidebarShop = ({ setProductFilter }) => {
  const initFilter = {
    search: "",
    category: [],
    tag: [],
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

        case "TAG":
          setFilter({
            ...filter,
            tag: [...filter.tag, item.label],
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
        case "TAG":
          const newTag = filter.tag.filter((e) => e !== item.label);
          setFilter({
            ...filter,
            tag: newTag,
          });
          break;

        default:
          break;
      }
    }
  };

  const updateProducts = useCallback(() => {
    let products = getAllProducts();

    console.log(filter.search);

    products = products.filter((e) => {
      return (
        e.title.toLowerCase().indexOf(filter.search.trim().toLowerCase()) >= 0
      );
    });

    if (filter.category.length > 0) {
      products = products.filter((e) => {
        const check = e.productCats.find((cat) =>
          filter.category.includes(cat)
        );
        return check !== undefined;
      });
    }
    if (filter.tag.length > 0) {
      products = products.filter((e) => {
        const check = e.tags.find((tag) => filter.tag.includes(tag));
        return check !== undefined;
      });
    }

    setProductFilter(products);
  }, [filter, setProductFilter]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

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
        <IkoTitle size={24}>Product Categories</IkoTitle>
        <div className="products__filter__widget__content">
          {filterProductCats.map((item, index) => (
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

        <IkoTitle size={24}>Product Tags</IkoTitle>
        <div className="products__filter__widget__content">
          {filterProductTags.map((item, index) => (
            <p key={index} className="products__filter__widget__content__item">
              <IkoCheckBox
                label={item.label}
                onChange={(input) => filterSelect("TAG", input.checked, item)}
                checked={filter.tag.includes(item.label)}
              />
            </p>
          ))}
        </div>
        <IkoButton onClick={() => clearFilter()}>Clear</IkoButton>
      </div>
    </>
  );
};

export default SidebarShop;
