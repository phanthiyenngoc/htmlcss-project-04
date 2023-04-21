import React from "react";
import Container from "../../../components/common/Container";
import "./Footer.css";

import facebook from "../../../assets/icon/f.png";
import instagram from "../../../assets/icon/instagram.png";
import twitter from "../../../assets/icon/tiwer.png";
import arrow from "../../../assets/icon/arrow.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <section className="footer__group">
          <section className="footer-left">
            <h3 className="footer__sub-title">Sign up for our newsletter</h3>
            <div className="footer_desc-group">
              <p className="footer__desc">Enter your email</p>
              <img src={arrow} alt="" className="arrow-right" />
            </div>
            <span className="underlined"></span>
            <div className="footer__icon-group">
              <div className="footer__icon-group01">
                <img src={facebook} alt="" className="footer__icon-face" />
              </div>
              <div className="footer__icon-group01">
                <img src={instagram} alt="" className="footer__icon-inst" />
              </div>
              <div className="footer__icon-group01">
                <img src={twitter} alt="" className="footer__icon-twitt" />
              </div>
            </div>
          </section>
          <section className="footer-right">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="!#" className="footer__list--link">
                  Pages
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  About
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Blog{" "}
                </a>
              </li>

              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Post
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="!#" className="footer__list--link">
                  Product
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  About
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Blog{" "}
                </a>
              </li>

              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Post
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="!#" className="footer__list--link">
                  Overview
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  About
                </a>
              </li>

              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Home3{" "}
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Pricing1
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="!#" className="footer__list--link">
                  About us
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Team{" "}
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Investors
                </a>
              </li>

              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Blog
                </a>
              </li>
              <li className="footer__item">
                <a href="!#" className="footer__link">
                  Press
                </a>
              </li>
            </ul>
          </section>
        </section>
        <span className="footer__underlined"></span>
      </Container>
    </footer>
  );
};

export default Footer;
