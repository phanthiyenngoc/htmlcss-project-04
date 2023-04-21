import React from "react";
import "./Header.css";
import Container from "../../../components/common/Container/index";
import logo from "../../../assets/image/logo.png";
import logo_text from "../../../assets/image/MODULARS (1).png";
import Button from "../../../components/common/Button";

function Header() {
  return (
    <header className="header">
      <Container>
        <section className="header-top">
          <div className="secsion__logo">
            <a href="/">
              <img src={logo} alt="logo" className="secsion__img" />
            </a>
            <a href="/">
              <img src={logo_text} alt="logo_text" className="secsion__img-text" />
            </a>
            <span></span>
          </div>

          <nav>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="!#" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="!#" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="!#" className="nav__link">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a href="!#" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Button className="action">Sign Up</Button>
        </section>
      </Container>
    </header>
  );
}

export default Header;
