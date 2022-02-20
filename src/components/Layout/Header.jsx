import React from "react";
import { Link } from "react-router-dom";
import { IkoButton, IkoContainer, IkoRow } from "../../ikoComponents";

const Header = () => {
  return (
    <header className="header">
      <IkoContainer>
        <IkoRow>
          <div className="header__left">
            <div className="header__logo">
              <Link to="/" className="logo">
                iKo
              </Link>
            </div>
          </div>
          <div className="header__center">
            <ul className="header__menu">
              <li className="header__menu__item">
                <Link to="/">Home</Link>
              </li>
              <li className="header__menu__item">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="header__menu__item">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="header__menu__item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="header__menu__item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <div className="header__search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header__darkmode">
              <IkoButton outline>
                <i className="fa-solid fa-lightbulb"></i>
              </IkoButton>
            </div>
          </div>
        </IkoRow>
      </IkoContainer>
    </header>
  );
};

export default Header;
