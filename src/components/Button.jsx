import React, { useState } from "react";
import { colors } from "../data";
import { IkoButton, IkoCol, IkoContainer, IkoRow } from "../ikoComponents";
import IkoModal from "../ikoComponents/IkoModal";

const Button = () => {
  const [show, setShow] = useState(false);

  return (
    <IkoContainer>
      <IkoRow>
        <IkoCol>Iko Button</IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol>
          <IkoButton borderColor="gray" outline color="green" size="lg">
            Click me!
          </IkoButton>
        </IkoCol>
        <IkoCol>
          <IkoButton borderColor="gray" outline color="green">
            Click me!
          </IkoButton>
        </IkoCol>
        <IkoCol>
          <IkoButton borderColor="gray" outline color="green" size="md">
            Click me!
          </IkoButton>
        </IkoCol>
        <IkoCol>
          <IkoButton borderColor="gray" outline color="green" size="sm">
            Click me!
          </IkoButton>
        </IkoCol>
      </IkoRow>

      <IkoRow>
        <IkoCol>Iko Button background color</IkoCol>
      </IkoRow>
      <IkoRow>
        {colors.map((item, index) => (
          <IkoCol col={2} key={index} style={{ marginBottom: "10px" }}>
            <IkoButton bgColor={item}>Click me!</IkoButton>
          </IkoCol>
        ))}
      </IkoRow>

      <IkoRow>
        <IkoCol>Iko Button Color</IkoCol>
      </IkoRow>
      <IkoRow>
        {colors.map((item, index) => (
          <IkoCol col={2} key={index} style={{ marginBottom: "10px" }}>
            <IkoButton outline color={item} borderColor={item}>
              Click me!
            </IkoButton>
          </IkoCol>
        ))}
      </IkoRow>

      <IkoRow>
        <IkoCol>Iko Button block</IkoCol>
      </IkoRow>
      <IkoRow>
        <IkoCol col={4} style={{ marginBottom: "10px" }}>
          <IkoButton outline block color="gray" borderColor="gray">
            Click me!
          </IkoButton>
        </IkoCol>
        <IkoCol col={4} style={{ marginBottom: "10px" }}>
          <IkoButton
            outline
            block
            color="green"
            size="lg"
            onClick={() => setShow(true)}
          >
            Click me!
          </IkoButton>
        </IkoCol>
      </IkoRow>
      <IkoModal show={show} setShow={setShow}>
        Hello moij nguowif
      </IkoModal>
    </IkoContainer>
  );
};

export default Button;
