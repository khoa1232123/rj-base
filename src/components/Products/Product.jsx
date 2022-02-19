import React from "react";
import { IkoButton } from "../../ikoComponents";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__img">
        <img src={product.img} alt="" />
      </div>
      <div className="product__content">
        <div className="product__title">{product.title}</div>
        <div className="product__price">${product.price}</div>
        <div className="product__actions">
          <div className="product__add-to-cart">
            <IkoButton
              bgColor="green"
              outline
              borderColor={"white"}
              style={{ padding: 0 }}
            >
              Add To Cart
            </IkoButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
