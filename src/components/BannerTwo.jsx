import React from "react";
import { IkoButton, IkoCol, IkoContainer, IkoRow } from "../ikoComponents";
import banner03 from "../imgs/banner-03.png";
import bgBanner from "../imgs/background-banner.jpg";

const BannerTwo = () => {
  return (
    <div className="banner-two" style={{ backgroundImage: `url(${bgBanner})` }}>
      <IkoContainer>
        <IkoRow>
          <IkoCol col={7}>
            <div className="banner">
              <div className="banner__wrapper">
                <div className="banner__content">
                  <div className="banner__title">50% Off All Toys For Pet</div>
                  <div className="banner__desc">
                    Don’t let your pet be sad, buy a gift for them
                  </div>
                  <IkoButton
                    icon="fa-solid fa-paw"
                    bgColor="red"
                    className="banner__btn"
                  >
                    Shop Now
                  </IkoButton>
                </div>
              </div>
            </div>
          </IkoCol>
          <IkoCol col={5}>
            <div className="banner">
              <div className="banner__wrapper">
                <div className="banner__img">
                  <img src={banner03} alt="" />
                </div>
              </div>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default BannerTwo;
