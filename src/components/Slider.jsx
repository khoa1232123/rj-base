import React from "react";
import { IkoButton, IkoCol, IkoContainer, IkoRow } from "../ikoComponents";
import slider from "../imgs/slider-1.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__img">
        <img src={slider} alt="" />
      </div>
      <IkoContainer fluid className="slider__wrapper">
        <IkoContainer>
          <IkoRow>
            <IkoCol>
              <div className="slider__heading">
                Specialist diets & supplements
              </div>
              <div className="slider__desc">Healthy From Whisker To Tail</div>
              <IkoButton
                bgColor="red"
                icon="fa-solid fa-arrow-right-long"
                iconRight
              >
                Shop Now
              </IkoButton>
            </IkoCol>
            <IkoCol></IkoCol>
          </IkoRow>
        </IkoContainer>
      </IkoContainer>
    </div>
  );
};

export default Slider;
