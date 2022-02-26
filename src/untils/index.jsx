import { getProductById } from "../data";

export const getTotalCartItems = (cartItems) => {
  const totalItems = cartItems.reduce((a, b) => a + Number(b.quantity), 0);

  const totalPrice = cartItems.reduce((a, b) => {
    const { price } = getProductById(b.id);
    return a + Number(b.quantity) * Number(price);
  }, 0);

  return { totalItems, totalPrice };
};

export const convertPrice = (price) => {
  return "$ " + price;
};
