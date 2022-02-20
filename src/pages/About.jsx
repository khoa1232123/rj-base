import React from "react";
import { TitleHead } from "../components";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";
import imgAbout from "../imgs/about-us.jpg";

const About = () => {
  return (
    <div className="about">
      <TitleHead title="About us" />
      <IkoContainer fluid>
        <IkoRow>
          <IkoCol>
            <IkoTitle center size={54} tag="h1">
              About
            </IkoTitle>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <div
              className="about__bg"
              style={{ backgroundImage: `url(${imgAbout})` }}
            ></div>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <IkoContainer>
              <IkoRow>
                <IkoCol>
                  <IkoTitle size={30} tag="h3">
                    OUR STORES
                  </IkoTitle>
                  <div className="about__txt">
                    <p>
                      A great About Us page helps builds trust between you and
                      your customers. The more content you provide about you and
                      your business, the more confident people willz be when
                      purchasing from your store.
                    </p>
                  </div>
                </IkoCol>
                <IkoCol>
                  <IkoTitle size={30} tag="h3">
                    Contact
                  </IkoTitle>
                  <div className="about__txt">
                    <p>
                      3166 Broaddus Maple Court Avenue,
                      <br />
                      Madisonville KY 42431,
                      <br />
                      United States of America
                    </p>
                    <p>
                      Phone: +1 123456 7893
                      <br />
                      Email: hello@yourwebsite.com
                    </p>
                  </div>
                </IkoCol>
              </IkoRow>
            </IkoContainer>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default About;
