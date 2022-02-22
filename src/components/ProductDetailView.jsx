import React from "react";
import { getProductById } from "../data";
import {
  IkoButton,
  IkoCol,
  IkoInput,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";

const ProductDetailView = ({ productId }) => {
  const { img, title, price, desc, productCats, tags } =
    getProductById(productId);
  return (
    <div className="product-view">
      <IkoRow>
        <IkoCol col={6} smCol={12}>
          <div className="product-view__img">
            <img src={img} alt="" />
          </div>
        </IkoCol>
        <IkoCol col={6} smCol={12}>
          <div className="product-view__content">
            <IkoTitle size={24} className="product-view__title">
              {title}
            </IkoTitle>
            <div className="product-view__price">${price}</div>
            <div className="product-view__form">
              <div className="product-view__form__quantity">
                <div className="product-view__form__quantity--minus">
                  <i className="fas fa-minus"></i>
                </div>
                <input
                  type="number"
                  defaultValue="1"
                  className="product-view__form__quantity--input"
                />
                <div className="product-view__form__quantity--plus">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <IkoButton className="product-view__form__btn">
                Add To Cart
              </IkoButton>
            </div>
            <div className="product-view__categories">
              <span>Categories: </span>
              {productCats.map((item, index) => (
                <div className="product-view__categories__item" key={index}>
                  {item}
                </div>
              ))}
            </div>
            <div className="product-view__tags">
              <span>Tags: </span>
              {tags.map((item, index) => (
                <div className="product-view__tags__item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol>
          <IkoTitle center size={24}>
            Description
          </IkoTitle>
          <div
            className="product-view__desc"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></div>
        </IkoCol>
      </IkoRow>
    </div>
  );
};

export default ProductDetailView;
