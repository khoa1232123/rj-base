import React, { memo } from "react";
import { IkoCol, IkoRow } from "../../ikoComponents";
import Product from "./Product";

const Products = ({ products, col, mdCol, smCol }) => {
  return (
    <IkoRow className="products">
      {products &&
        products.map((item, index) => (
          <IkoCol
            key={index}
            col={col ? col : 3}
            mdCol={mdCol ? mdCol : 4}
            smCol={smCol ? smCol : 6}
          >
            <Product product={item} />
          </IkoCol>
        ))}
    </IkoRow>
  );
};

export default memo(Products);
export { Product };
