import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IkoButton } from "../../ikoComponents";
import { addItem } from "../../Redux/cart/cartItemsSlice";
import { set } from "../../Redux/product-modal/productModalSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return true;
  };

  return (
    <div className="product">
      <div className="product__img">
        <Link to={`/product/${product.id}`} onClick={() => scrollToTop()}>
          <img src={product.img} alt="" />
        </Link>
      </div>
      <div className="product__content">
        <div className="product__title">{product.title}</div>
        <div className="product__price">${product.price}</div>
        <div className="product__actions">
          <div className="product__add-to-cart">
            <IkoButton
              bgColor="green"
              outline
              color="blue"
              size="md"
              onClick={() =>
                dispatch(
                  addItem({
                    id: product.id,
                    quantity: 1,
                  })
                )
              }
            >
              Add To Cart
            </IkoButton>
          </div>
          <div className="product__quickview">
            <IkoButton
              outline
              onClick={() => dispatch(set(product.id))}
              size="md"
              color="orange"
            >
              <i className="far fa-eye"></i>
            </IkoButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
