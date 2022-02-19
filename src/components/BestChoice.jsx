import React from "react";
import { Seperator } from ".";
import { products } from "../data";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";
import Products from "./Products";

const BestChoice = () => {
  return (
    <IkoContainer className="best-choice">
      <IkoRow>
        <IkoCol style={{ marginBottom: 50 }}>
          <IkoTitle center size={36} style={{ marginBottom: 20 }}>
            Best Choice
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

export default BestChoice;
