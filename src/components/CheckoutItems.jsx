import React from "react";
import { getProductById } from "../data";

const CheckoutItems = ({ item }) => {
  const { id, quantity } = item;
  const product = getProductById(id);

  return (
    <div className="checkout-item">
      <div className="checkout-item__img">
        <img src={product.img} alt="" />
      </div>
      <div className="checkout-item__title">{product.title}</div>
      <div className="checkout-item__price">$ {product.price}</div>
      <div className="checkout-item__quantity">{quantity}</div>
      <div className="checkout-item__total">$ {product.price * quantity}</div>
    </div>
  );
};

export default CheckoutItems;
