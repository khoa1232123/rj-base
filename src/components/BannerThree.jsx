import React from "react";
import { services } from "../data";
import { IkoButton, IkoCol, IkoContainer, IkoRow } from "../ikoComponents";
import banner04 from "../imgs/banner-04.png";
const BannerThree = () => {
  return (
    <div className="banner-three">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={6}>
            <div className="banner">
              <div className="banner__wrapper">
                <div className="banner__content">
                  <div className="banner__title__sub">OUR SERVICES</div>
                  <div className="banner__title">
                    Take care of your pet with our services
                  </div>
                  <div className="banner__desc">
                    Your pets are susceptible to diseases that humans either
                    rarely or never contract.
                  </div>
                  <IkoRow className="banner__list">
                    {services.map((item, index) => (
                      <IkoCol key={index}>
                        <div className="banner__list__item">
                          <div className="banner__list__item__img">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="banner__list__item__title">
                            {item.title}
                          </div>
                        </div>
                      </IkoCol>
                    ))}
                  </IkoRow>
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
          <IkoCol col={6}>
            <div className="banner">
              <div className="banner__wrapper">
                <div className="banner__img">
                  <img src={banner04} alt="" />
                </div>
              </div>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default BannerThree;
