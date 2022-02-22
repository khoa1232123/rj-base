import React from "react";
import { IkoCol, IkoRow } from "../../ikoComponents";
import Product from "./Product";

const Products = ({ products, col }) => {
  return (
    <IkoRow className="products">
      {products &&
        products.map((item, index) => (
          <IkoCol key={index} col={col ? col : 3}>
            <Product product={item} />
          </IkoCol>
        ))}
    </IkoRow>
  );
};

export default Products;
