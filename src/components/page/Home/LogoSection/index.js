import React from "react";
import "./LogoSection.css";
import Container from "../../../../components/common/Container";
import slack from "../../../../assets/icon/icon_Agworld.png";
import agworld from "../../../../assets/icon/icon_RioTinto.png";
import heroku from "../../../../assets/icon/icon_HEROKU.png";

function LogoSection() {
  return (
    <section className="LogoSection">
      <Container>
        <section className="logoSection_group">
          <ul className="logoSection__list">
            <li className="logoSectionItem">
              <a href="#!" className="link">
                Google
              </a>
            </li>
          </ul>
          <ul className="logoSection__list">
            <img src={slack} alt="" />
            <li className="logoSectionItem">
              <a href="#!" className="link">
                slack
              </a>
            </li>
          </ul>
          <ul className="logoSection__list">
            <img src={agworld} alt="" />
            <li className="logoSectionItem">
              <a href="#!" className="link">
                Agworld
              </a>
            </li>
          </ul>
          <ul className="logoSection__list">
            <li className="logoSectionItem">
              <a href="#!" className="link">
                RioTinto
              </a>
            </li>
          </ul>
          <ul className="logoSection__list">
            <img src={heroku} alt="" />
            <li className="logoSectionItem">
              <a href="#!" className="link">
                HEROKU
              </a>
            </li>
          </ul>
        </section>
      </Container>
    </section>
  );
}

export default LogoSection;
