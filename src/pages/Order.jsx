import React from "react";
import { useSelector } from "react-redux";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Order = () => {
  const orderItems = useSelector((state) => state.orderItems.items);

  const order = orderItems.slice(-1)[0];
  return (
    <IkoContainer className="order">
      <IkoRow>
        <IkoCol col={12} mdCol={12}>
          <IkoTitle center tag="h1">
            Chúc mừng bạn đã đặt hàng thành công
          </IkoTitle>
        </IkoCol>

        <IkoCol col={5} mdCol={12}>
          <IkoTitle tag="h3">Billing Address</IkoTitle>
          <p>
            {order.firstName} {order.lastName}
          </p>
          <p>{order.phone}</p>
          <p>{order.email}</p>
          <p>{order.address}</p>
        </IkoCol>
        <IkoCol col={7} mdCol={12}>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.img} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="order__total">
            <span className="order__total__txt">Total:</span>
            <span className="order__total__price">${order.total}</span>
          </div>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default Order;
