import React from "react";
import { products } from "../data";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";
import Products from "./Products";
import Seperator from "./Seperator";

const NewArrival = () => {
  return (
    <IkoContainer className="new-arrival">
      <IkoRow>
        <IkoCol style={{ marginBottom: 50 }}>
          <IkoTitle center size={36} style={{ marginBottom: 20 }}>
            New Arrival
          </IkoTitle>
          <Seperator />
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol>
          <Products products={products} col={3} />
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default NewArrival;
