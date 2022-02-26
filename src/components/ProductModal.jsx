import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IkoButton } from "../ikoComponents";
import { remove } from "../Redux/product-modal/productModalSlice";
import ProductDetailView from "./ProductDetailView";

const ProductViewModal = () => {
  const { productId } = useSelector((state) => state.productModal);
  const dispatch = useDispatch();
  return (
    <div className={`product__modal ${productId !== null ? "active" : ""}`}>
      <div
        className="product__modal__mark"
        onClick={() => dispatch(remove())}
      ></div>
      <div className="product__modal__content">
        {productId && <ProductDetailView productId={productId} />}
        <div className="product__modal__content__close">
          <IkoButton
            size="sm"
            onClick={() => dispatch(remove())}
            bgColor={"red"}
          >
            <i className="fas fa-times"></i>
          </IkoButton>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
