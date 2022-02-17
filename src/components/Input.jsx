import React from "react";
import { IkoCol, IkoContainer, IkoInput, IkoRow } from "../ikoComponents";

const Input = () => {
  return (
    <IkoContainer>
      <IkoRow>
        <IkoCol>
          <IkoInput label="hello" />
        </IkoCol>
        <IkoCol>
          <IkoInput label="hello" defaultValue={"500"} />
        </IkoCol>
        <IkoCol>
          <IkoInput label="hello" placeholder={"poaijsdfpoasdjf"} />
        </IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol>
          <IkoInput label="hello" size="lg" labelEffect color="blue" />
        </IkoCol>
        <IkoCol>
          <IkoInput label="hello" labelEffect />
        </IkoCol>
        <IkoCol>
          <IkoInput label="hello" size="md" labelEffect />
        </IkoCol>
        <IkoCol>
          <IkoInput
            label="hello"
            size="sm"
            placeholder={"hello petter"}
            labelEffect
          />
        </IkoCol>
      </IkoRow>
    </IkoContainer>
  );
};

export default Input;
