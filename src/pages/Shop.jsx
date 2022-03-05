import React, { useState } from "react";
import { InfinityList, TitleHead } from "../components";
import SidebarShop from "../components/SidebarShop";
import { getAllProducts } from "../data";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Shop = () => {
  const [productFilter, setProductFilter] = useState(getAllProducts());

  return (
    <IkoContainer style={{ marginTop: 60 }}>
      <TitleHead title={"Shop"} />
      <IkoRow>
        <IkoCol col={3} mdCol={12}>
          <SidebarShop setProductFilter={setProductFilter} />
        </IkoCol>
        <IkoCol col={9} mdCol={12}>
          {productFilter.length ? (
            <InfinityList data={productFilter} />
          ) : (
            <IkoTitle center>No products!</IkoTitle>
          )}
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default Shop;
