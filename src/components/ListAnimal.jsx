import React from "react";
import { animals } from "../data";
import { IkoCol, IkoContainer, IkoRow } from "../ikoComponents";

const ListAnimal = () => {
  return (
    <div className="list-animal">
      <IkoContainer>
        <IkoRow>
          {animals.map((animal, index) => (
            <IkoCol key={index} mdCol={4} smCol={6}>
              <div className="list-animal__item">
                <div className="list-animal__img">
                  <img src={animal.img} alt="" />
                </div>
                <div className="list-animal__title">{animal.title}</div>
              </div>
            </IkoCol>
          ))}
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default ListAnimal;
