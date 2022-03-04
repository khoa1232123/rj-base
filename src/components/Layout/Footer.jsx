import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IkoCol, IkoContainer, IkoRow } from "../../ikoComponents";
import background from "../../imgs/h11-footer-bg.png";
import footerImage from "../../imgs/h11-bottom-footer-bg.png";

const Footer = () => {
  console.log("abc footer");

  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="footer__img">
        <img src={footerImage} alt="" />
      </div>
      <IkoContainer fluid className="footer__wrapper">
        <IkoRow>
          <IkoCol col={3} mdCol={6} smCol={12}>
            <div className="footer__logo">
              <Link to="/" className="logo">
                iKo
              </Link>
            </div>
            <div className="footer__info">
              <p>
                help@example.co
                <br />
                +84 1425 6869
              </p>
              <p>
                Mon – Sat: 7am – 21pm
                <br />
                Sun: 8am – 22pm
              </p>
            </div>
          </IkoCol>
          <IkoCol col={3} mdCol={6} smCol={12}>
            <div className="footer__menu">
              <div className="footer__menu__item">
                <Link to="/">Help & Support</Link>
              </div>
              <div className="footer__menu__item">
                <Link to="/">FAQs</Link>
              </div>
              <div className="footer__menu__item">
                <Link to="/">Shipping & Returns</Link>
              </div>
              <div className="footer__menu__item">
                <Link to="/">Order Tracking</Link>
              </div>
            </div>
          </IkoCol>
          <IkoCol col={3} mdCol={6} smCol={12}>
            <div className="footer__menu">
              <div className="footer__menu__item">
                <Link to="/">About</Link>
              </div>
              <div className="footer__menu__item">
                <Link to="/">Contact</Link>
              </div>
              <div className="footer__menu__item">
                <Link to="/">Store Locate</Link>
              </div>
              <div className="footer__menu__item">
                <Link to="/">Career</Link>
              </div>
            </div>
          </IkoCol>
          <IkoCol col={3} mdCol={6} smCol={12}>
            <div className="footer__menu">
              <div className="footer__menu__item">
                <Link to="/">Facebook</Link>
              </div>
              <div className="footer__menu__item">
                <Link to="/">Twitter</Link>
              </div>
              <div className="footer__menu__item">
                <Link to="/">Instagram</Link>
              </div>
              <div className="footer__menu__item">
                <Link to="/">Pinterest</Link>
              </div>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
      <IkoContainer fluid className="footer__copyright">
        <IkoRow>
          <IkoCol>
            <div className="footer__copyright__txt">
              Copyright © 2022 by Nguyễn Đình Khôi. All rights reserved
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </footer>
  );
};

export default memo(Footer);
