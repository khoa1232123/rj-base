import React from "react";
import { useSelector } from "react-redux";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  console.log(cartItems);

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
        <IkoCol col={7}></IkoCol>
        <IkoCol col={5}>
          <div className="cart__info">
            <div className="cart__txt">
              Bạn đang có {} sản phẩm trong giỏ hàng
            </div>
            <div className="cart__subtotal">
              <div className="cart__subtotal__txt">Price:</div>
              <div className="cart__subtotal__price">13</div>
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
