import React from "react";
import { useSelector } from "react-redux";
import { CartItems } from "../components";
import { getProductById } from "../data";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.items);

  const totalItems = cartItems.reduce((a, b) => a + b.quantity, 0);

  const totalPrice = cartItems.reduce((a, b) => {
    const { price } = getProductById(b.id);
    return a + b.quantity * price;
  }, 0);

  return (
    <IkoContainer className="cart">
      <IkoRow>
        <IkoCol>
          <IkoTitle center size={54}>
            Cart
          </IkoTitle>
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol col={7}>
          <div className="cart__list">
            {cartItems.map((item, index) => (
              <CartItems key={index} item={item} />
            ))}
          </div>
        </IkoCol>
        <IkoCol col={5}>
          <div className="cart__info">
            <div className="cart__txt">
              You have {totalItems} products in your cart
            </div>
            <div className="cart__subtotal">
              <div className="cart__subtotal__txt">Total Price:</div>
              <div className="cart__subtotal__price">${totalPrice}</div>
            </div>
            <IkoButton block style={{ marginBottom: 20 }}>
              Check Out
            </IkoButton>
            <IkoButton block>Continue shopping</IkoButton>
          </div>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default Cart;
