import React from "react";
import { useNavigate } from "react-router-dom";
import { IkoButton, IkoCol, IkoContainer, IkoRow } from "../ikoComponents";
import banner01 from "../imgs/banner-01.png";
import banner02 from "../imgs/banner-02.png";

const BannerOne = () => {
  const navigate = useNavigate();
  return (
    <div className="banner-one">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={6}>
            <div className="banner">
              <div className="banner__wrapper">
                <div className="banner__img">
                  <img src={banner01} alt="" />
                </div>
                <div className="banner__content">
                  <div className="banner__title">Pet Food</div>
                  <div className="banner__desc">Healthy from natural</div>
                  <IkoButton
                    icon="fa-solid fa-paw"
                    bgColor="red"
                    className="banner__btn"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </IkoButton>
                </div>
              </div>
            </div>
          </IkoCol>
          <IkoCol col={6}>
            <div className="banner">
              <div className="banner__wrapper">
                <div className="banner__img">
                  <img src={banner02} alt="" />
                </div>
                <div className="banner__content">
                  <div className="banner__title">Pet Food</div>
                  <div className="banner__desc">Healthy from natural</div>
                  <IkoButton
                    icon="fa-solid fa-paw"
                    bgColor="green"
                    className="banner__btn"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </IkoButton>
                </div>
              </div>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default BannerOne;
