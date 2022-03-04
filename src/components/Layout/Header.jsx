import React, { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IkoButton, IkoCol, IkoContainer, IkoRow } from "../../ikoComponents";

const Header = ({ darkmode, setDarkmode }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const cartItems = useSelector((state) => state.cartItems.items);

  const totalItems = cartItems.reduce((a, b) => a + b.quantity, 0);

  const headerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  console.log("abc header");

  return (
    <header className="header" ref={headerRef}>
      <IkoContainer>
        <IkoRow>
          <IkoCol col={3} className="header__left">
            <div className="header__menu__button mobile">
              <IkoButton outline onClick={() => setShowMenuMobile(true)}>
                <i className="fas fa-bars"></i>
              </IkoButton>
              <div
                className={`header__menu__mark ${
                  showMenuMobile ? "active" : ""
                }`}
                onClick={() => setShowMenuMobile(false)}
              ></div>
              <ul
                className={`header__menu mobile ${
                  showMenuMobile ? "active" : ""
                }`}
              >
                <li className="header__menu__item">
                  <Link to="/" onClick={() => setShowMenuMobile(false)}>
                    Home
                  </Link>
                </li>
                <li className="header__menu__item">
                  <Link to="/blogs" onClick={() => setShowMenuMobile(false)}>
                    Blogs
                  </Link>
                </li>
                <li className="header__menu__item">
                  <Link to="/shop" onClick={() => setShowMenuMobile(false)}>
                    Shop
                  </Link>
                </li>
                <li className="header__menu__item">
                  <Link to="/contact" onClick={() => setShowMenuMobile(false)}>
                    Contact
                  </Link>
                </li>
                <li className="header__menu__item">
                  <Link to="/about" onClick={() => setShowMenuMobile(false)}>
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="header__logo desktop">
              <Link to="/" className="logo">
                iKo
              </Link>
            </div>
          </IkoCol>
          <IkoCol col={6} className="header__center">
            <ul className="header__menu desktop">
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

            <div className="header__logo mobile">
              <Link to="/" className="logo">
                iKo
              </Link>
            </div>
          </IkoCol>
          <IkoCol col={3} className="header__right">
            <div className="header__cart">
              <IkoButton outline onClick={() => navigate("/cart")}>
                <i className="fas fa-shopping-basket"></i>
                <span className="header__cart__items">{totalItems}</span>
              </IkoButton>
            </div>
            <div className="header__darkmode">
              <IkoButton outline onClick={() => setDarkmode(!darkmode)}>
                <i className="fa-solid fa-lightbulb"></i>
              </IkoButton>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </header>
  );
};

export default memo(Header);
