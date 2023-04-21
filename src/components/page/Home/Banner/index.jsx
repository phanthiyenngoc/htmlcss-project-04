import React from "react";
import Button from "../../../common/Button";
import videoPlay from "../../../../assets/icon/video play.png";
import banner01 from "../../../../assets/image/hero01.jpg";
import banner02 from "../../../../assets/image/hero02.jpg";
import banner03 from "../../../../assets/image/hero03.jpg";
import union from "../../../../assets/icon/union.png";

import vector from "../../../../assets/icon/Vector 2639.png";
import vector_bottom from "../../../../assets/icon/Vector-bottom.png";
import "./banner.css";
import Container from "../../../common/Container";
const index = () => {
  return (
    <Container>
      <section className="banner header-hero">
        <section className="hero__content">
          <h2 className="hero_content--sub-title">We’re a creative design agency.</h2>
          <p className="hero__content--desc">A brilliant, modular agency template for startup’s build yours toady.</p>
          <div className="hero__action">
            <Button>Get in touch</Button>
            <img src={videoPlay} alt="" className="hero__video-play" />
          </div>
          <div className="hero__union">
            <img src={union} alt="" className="union" />
            <img src={vector} alt="" className="vector" />
          </div>
        </section>
        <section className="hero__media">
          <figure className="hero__image">
            <img src={banner01} alt="" className="hero__img" />
          </figure>
          <figure className="hero__image">
            <img src={banner02} alt="" className="hero__img" />
          </figure>
          <figure className="hero__image">
            <img src={banner03} alt="" className="hero__img" />
          </figure>
        </section>
        <div className="hero__union_bottom">
          <img src={union} alt="" className="union" />
          <img src={vector_bottom} alt="" className="vector_bottom" />
        </div>
      </section>
    </Container>
  );
};

export default index;
