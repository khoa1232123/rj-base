import React, { useCallback, useEffect, useState } from "react";
import { InfinityList } from "../components";
import { filterProductCats, filterProductTags, getAllProducts } from "../data";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";
import IkoCheckBox from "../ikoComponents/IkoCheckBox";

const Shop = () => {
  const [productFilter, setProductFilter] = useState(getAllProducts());

  const initFilter = {
    category: [],
    tag: [],
  };

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
    let temp = getAllProducts();

    if (filter.category.length > 0) {
      temp = temp.filter((e) => {
        const check = e.productCats.find((cat) =>
          filter.category.includes(cat)
        );
        return check !== undefined;
      });
    }
    if (filter.tag.length > 0) {
      temp = temp.filter((e) => {
        const check = e.tags.find((tag) => filter.tag.includes(tag));
        return check !== undefined;
      });
    }

    setProductFilter(temp);
  }, [filter, setProductFilter]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const clearFilter = () => {
    setFilter(initFilter);
  };

  return (
    <IkoContainer style={{ marginTop: 60 }}>
      <IkoRow>
        <IkoCol col={3}>
          <div className="products__filter__widget">
            <IkoTitle size={24}>Product Categories</IkoTitle>
            <div className="products__filter__widget__content">
              {filterProductCats.map((item, index) => (
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

            <IkoTitle size={24}>Product Tags</IkoTitle>
            <div className="products__filter__widget__content">
              {filterProductTags.map((item, index) => (
                <p
                  key={index}
                  className="products__filter__widget__content__item"
                >
                  <IkoCheckBox
                    label={item.label}
                    onChange={(input) =>
                      filterSelect("TAG", input.checked, item)
                    }
                    checked={filter.tag.includes(item.label)}
                  />
                </p>
              ))}
            </div>
          </div>
          <IkoButton onClick={() => clearFilter()}>Clear</IkoButton>
        </IkoCol>
        <IkoCol col={9}>
          <InfinityList data={productFilter} />
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default Shop;
