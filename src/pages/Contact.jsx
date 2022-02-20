import React from "react";
import { TitleHead } from "../components";
import {
  IkoButton,
  IkoCol,
  IkoContainer,
  IkoInput,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";
import map from "../imgs/map.png";

const Contact = () => {
  return (
    <div className="contact">
      <TitleHead title="Contact" />
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <IkoTitle center size={54} tag="h1">
              Contact
            </IkoTitle>
          </IkoCol>
        </IkoRow>

        <IkoRow>
          <IkoCol>
            <div className="contact__img">
              <img src={map} alt="" />
            </div>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol col={5}>
            <IkoTitle size={24} tag="h3">
              Infomation
            </IkoTitle>
          </IkoCol>
          <IkoCol col={7}>
            <div className="contact__txt">
              <p>
                A great About Us page helps builds trust between you and your
                customers. The more content you provide about you and your
                business, the more confident people willz be when purchasing
                from your store.
              </p>
              <p>Your About Us page might include:</p>
              <ul>
                <li>Address: 169 Nguyen Ngoc Vu, Cau Giay, Ha Noi</li>
                <li>
                  Phone: <a href="/#">84 0933 123 686</a>
                </li>
                <li>
                  Email: <a href="mailto:hello@example.co">hello@example.co</a>
                </li>
                <li>Monday – Saturday: 8am – 9pm</li>
                <li>Sunday: 9am – 10pm</li>
              </ul>
            </div>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol col={5}>
            <IkoTitle size={24} tag="h3">
              Infomation
            </IkoTitle>
          </IkoCol>
          <IkoCol col={7}>
            <div className="contact__form">
              <IkoInput placeholder="Name *" />
              <IkoInput placeholder="Email *" />
              <IkoInput placeholder="Your Message *" />
              <div className="iko-input">
                <textarea placeholder="Your Message *"></textarea>
              </div>
              <IkoButton block>Post Comment</IkoButton>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Contact;
