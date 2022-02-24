import React from "react";
import { useDispatch } from "react-redux";
import { getProductById } from "../data";
import { IkoButton } from "../ikoComponents";
import { removeItem, updateItem } from "../Redux/cart/cartItemsSlice";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const { id, quantity } = item;
  const product = getProductById(id);

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={product.img} alt="" />
      </div>
      <div className="cart-item__title">{product.title}</div>
      <div className="cart-item__price">$ {product.price}</div>
      <div className="cart-item__quantity">
        <div
          className="cart-item__quantity--minus"
          onClick={() =>
            dispatch(
              updateItem({
                ...item,
                quantity: quantity - 1 === 0 ? 1 : quantity - 1,
              })
            )
          }
        >
          <i className="fas fa-minus"></i>
        </div>
        <div className="cart-item__quantity--input">{quantity}</div>
        <div
          className="cart-item__quantity--plus"
          onClick={() =>
            dispatch(
              updateItem({
                ...item,
                quantity: quantity + 1,
              })
            )
          }
        >
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="cart-item__total">$ {product.price * quantity}</div>
      <div className="cart-item__actions">
        <IkoButton onClick={() => dispatch(removeItem(item))}>
          <i className="far fa-trash-alt"></i>
        </IkoButton>
      </div>
    </div>
  );
};

export default CartItems;
