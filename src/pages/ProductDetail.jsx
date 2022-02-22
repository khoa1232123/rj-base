import React from "react";
import { useParams } from "react-router-dom";
import { Products, Seperator } from "../components";
import ProductDetailView from "../components/ProductDetailView";
import { getProducts } from "../data";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const ProductDetail = () => {
  const { id } = useParams();

  const relatedProducts = getProducts(4);

  console.log(id);
  return (
    <IkoContainer>
      <IkoRow>
        <IkoCol>
          <ProductDetailView productId={id} />
        </IkoCol>
      </IkoRow>
      <IkoRow style={{ marginTop: 100 }}>
        <IkoCol>
          <div className="product-related" style={{ marginBottom: "50px" }}>
            <IkoTitle center size={24}>
              Related Products
            </IkoTitle>
            <Seperator />
            <div className="space" style={{ marginBottom: "50px" }}></div>
            <Products products={relatedProducts} />
          </div>
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default ProductDetail;
