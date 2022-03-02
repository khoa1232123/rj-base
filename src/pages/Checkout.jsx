import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Seperator } from "../components";
import CheckoutItems from "../components/CheckoutItems";
import { getProductById } from "../data";
import { useNavigate } from "react-router-dom";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoInput,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";
import { removeAllItems } from "../Redux/cart/cartItemsSlice";
import { addItem } from "../Redux/order/orderItemsSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartItems.items);

  const dispatch = useDispatch();

  const [yourOrder, setYourOrder] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setYourOrder({ ...yourOrder, [name]: value });
  };

  const totalItems = cartItems.reduce((a, b) => a + b.quantity, 0);

  const totalPrice = cartItems.reduce((a, b) => {
    const { price } = getProductById(b.id);
    return a + b.quantity * price;
  }, 0);

  const handleOrder = () => {
    if (
      !yourOrder.firstName ||
      !yourOrder.lastName ||
      !yourOrder.email ||
      !yourOrder.address
    ) {
      alert("You need to enter enough information to order!");
      return;
    }
    yourOrder.items = [];
    cartItems.forEach((item) => {
      const { desc, productCats, tags, ...product } = getProductById(item.id);

      product.quantity = item.quantity;
      yourOrder.items.push(product);
    });
    yourOrder.total = totalPrice;
    dispatch(addItem(yourOrder));
    dispatch(removeAllItems());
    navigate("/order?status=success");
  };

  return (
    <IkoContainer className="checkout">
      <IkoRow style={{ marginBottom: 30 }}>
        <IkoCol>
          <IkoTitle center tag="h1">
            Checkout Page
          </IkoTitle>
          <Seperator />
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol col={7} mdCol={12}>
          <div className="checkout__info">
            <IkoRow>
              <IkoCol col={12}>
                <IkoTitle tag="h2">Bill Details</IkoTitle>
              </IkoCol>
              <IkoCol col={6} mdCol={6} smCol={12}>
                <IkoInput
                  label={"Frist Name"}
                  labelEffect
                  name="firstName"
                  onChange={handleChange}
                />
              </IkoCol>
              <IkoCol col={6} mdCol={6} smCol={12}>
                <IkoInput
                  label={"Last Name"}
                  labelEffect
                  name="lastName"
                  onChange={handleChange}
                />
              </IkoCol>
              <IkoCol col={6} mdCol={6} smCol={12}>
                <IkoInput
                  label={"Email"}
                  labelEffect
                  name="email"
                  onChange={handleChange}
                />
              </IkoCol>
              <IkoCol col={6} mdCol={6} smCol={12}>
                <IkoInput
                  label={"Phone"}
                  labelEffect
                  name="phone"
                  onChange={handleChange}
                />
              </IkoCol>
              <IkoCol col={12} mdCol={12} smCol={12}>
                <IkoInput
                  label={"Address"}
                  labelEffect
                  name="address"
                  onChange={handleChange}
                />
              </IkoCol>
            </IkoRow>
          </div>
        </IkoCol>
        <IkoCol col={5} mdCol={12}>
          <IkoRow>
            <IkoCol col={12}>
              <IkoTitle tag="h2">Your Order</IkoTitle>
            </IkoCol>
            <IkoCol col={12}>
              <div className="checkout__list">
                <div className="checkout-item checkout-item__header">
                  <div className="checkout-item__img">Image</div>
                  <div className="checkout-item__title">Title</div>
                  <div className="checkout-item__price">Price</div>
                  <div className="checkout-item__quantity">Quantity</div>
                  <div className="checkout-item__total">Total</div>
                </div>
                {cartItems.map((item, index) => (
                  <CheckoutItems key={index} item={item} />
                ))}
                <div className="checkout-item checkout-item__header">
                  <div className="checkout-item__img"></div>
                  <div className="checkout-item__title"></div>
                  <div className="checkout-item__price"></div>
                  <div className="checkout-item__quantity">{totalItems}</div>
                  <div className="checkout-item__total">${totalPrice}</div>
                </div>
              </div>
            </IkoCol>
            <IkoCol col={12}>
              <IkoButton block size="lg" onClick={() => handleOrder()}>
                Place Order
              </IkoButton>
            </IkoCol>
          </IkoRow>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default Checkout;
