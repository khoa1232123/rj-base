import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductById } from "../data";
import { IkoButton, IkoCol, IkoRow, IkoTitle } from "../ikoComponents";
import { addItem } from "../Redux/cart/cartItemsSlice";
import { remove } from "../Redux/product-modal/productModalSlice";

const ProductDetailView = ({ productId }) => {
  const { img, title, price, desc, productCats, tags } =
    getProductById(productId);

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 <= 0 ? 1 : quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: productId,
        quantity: quantity,
      })
    );
    dispatch(remove());
  };

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
                <div
                  className="product-view__form__quantity--minus"
                  onClick={() => handleQuantity("decrease")}
                >
                  <i className="fas fa-minus"></i>
                </div>
                <div className="product-view__form__quantity--input">
                  {quantity}
                </div>
                <div
                  className="product-view__form__quantity--plus"
                  onClick={() => handleQuantity("increase")}
                >
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <IkoButton
                className="product-view__form__btn"
                onClick={() => handleAddToCart()}
              >
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
          <IkoTitle center size={24}>
            Description
          </IkoTitle>
          <div
            className="product-view__desc"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></div>
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol></IkoCol>
      </IkoRow>
    </div>
  );
};

export default ProductDetailView;
