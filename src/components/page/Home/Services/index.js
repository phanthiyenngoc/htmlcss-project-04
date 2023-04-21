import React from "react";
import "./Services.css";
import Container from "../../../common/Container";
import arrow_left from "../../../../assets/icon/Right arrow.png";
import arrow_right from "../../../../assets/icon/left arrow.png";
import services_01 from "../../../../assets/image/1.png";
import services_03 from "../../../../assets/image/Rectangle .png";

import services_02 from "../../../../assets/image/Rectangle 6042.png";

function ServicesList(props) {
  const { image, title, description } = props;
  return (
    <section className="section__item">
      <figure className="section__img">
        <img src={image} alt="" className="section__image" />
      </figure>
      <h4 className="Services__title">{title}</h4>
      <p className="servies__desc">{description}</p>
    </section>
  );
}

const Services = () => {
  const services = [
    {
      id: 1,
      img: services_01,
      title: "Branding",
      desc: "Create beautiful Agency website with Boluethat converts more visitors than any website.",
    },
    {
      id: 1,
      img: services_02,
      title: "Web Design",
      desc: "Create beautiful Agency website with Boluethat converts more visitors than any website.",
    },
    {
      id: 1,
      img: services_03,
      title: "Graphic Design",
      desc: "Create beautiful Agency website with Boluethat converts more visitors than any website.",
    },
  ];
  return (
    <section className="services">
      <Container>
        <section className="services__row01">
          <div className="services__row01-group">
            <span className="services__row01--underlined-left"></span>
            <span className="services__row01--desc">OUR SERVICES</span>
          </div>
          <div className="services__row01-title">
            <h2 className="services__row01--title">We offer a wide range of design services</h2>
            <div className="arrow">
              <div className="arrow__group">
                <img src={arrow_left} alt="" className="arrow_left" />
              </div>
              <div className="arrow__group arrow__group--right">
                <img src={arrow_right} alt="" className="arrow_right" />
              </div>
            </div>
          </div>
        </section>
        <section className="services__row-02">
          {services.map((service, index) => (
            <ServicesList key={index.id} image={service.img} title={service.title} description={service.desc} />
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Services;
