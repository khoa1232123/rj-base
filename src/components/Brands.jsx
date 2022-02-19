import React from "react";
import { Seperator } from ".";
import { brands } from "../data";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Brands = () => {
  return (
    <div className="brands">
      <IkoContainer>
        <IkoRow>
          <IkoCol style={{ marginBottom: 50 }}>
            <IkoTitle center size={36} style={{ marginBottom: 20 }}>
              Top brand in stock
            </IkoTitle>
            <Seperator />
          </IkoCol>
        </IkoRow>
        <IkoRow className="brands__list">
          {brands.map((item, index) => (
            <IkoCol col={2} key={index}>
              <div className="brands__item">
                <img src={item} alt="" />
              </div>
            </IkoCol>
          ))}
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Brands;
