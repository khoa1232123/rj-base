import { getProductById } from "../data";

export const getTotalCartItems = (cartItems) => {
  const totalItems = cartItems.reduce((a, b) => a + b.quantity, 0);

  const totalPrice = cartItems.reduce((a, b) => {
    const { price } = getProductById(b.id);
    return a + b.quantity * price;
  }, 0);

  return { totalItems, totalPrice };
};
