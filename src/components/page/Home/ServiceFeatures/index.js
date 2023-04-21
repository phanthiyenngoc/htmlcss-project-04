import React from "react";
import "./ServicesFeatures.css";
import Container from "../../../../components/common/Container";
import SF01 from "../../../../assets/icon/SF01.png";
import SF02 from "../../../../assets/icon/SF02.png";

import SF03 from "../../../../assets/icon/SF03.png";

function ServiceFeaturesItem(props) {
  const { Index, image, title, description } = props;
  return (
    <section className={Index == 1 ? "serviceFeatures__row02-item index_1" : "serviceFeatures__row02-item"}>
      <img src={image} alt="" className="serviceFeatures__row02--img" />
      <p className="serviceFeatures__row02--title">{title}</p>
      <p className="serviceFeatures__row02--desc">{description}</p>
    </section>
  );
}

const ServiceFeatures = () => {
  const ServiceFeaturesList = [
    {
      id: 1,
      img: SF01,
      title: "Blog",
      desc: "We’ve researched numerous agencies and complied a list of digital marketing agency blogs you should read to stay ahead of your rivals and succeed online!",
    },
    {
      id: 2,
      img: SF02,
      title: "Documention",
      desc: "In this article, we discuss the different types of documentation, what makes for great technical documentation, and provide examples.",
    },
    {
      id: 3,
      img: SF03,
      title: "Customers",
      desc: "Your customers have high expectations — and if your business can't meet them, they're going to leave you for your competitors.",
    },
  ];
  return (
    <section className="serviceFeatures">
      <Container>
        <section className="serviceFetures__group">
          <section className="serviceFeatures__row01">
            <h3 className="serviceFetures__row01-title">Share the features that help your customers</h3>
            <p className="serviceFetures__row01-desc">
              You already know that the customer experience doesn't end with a sale — it's an ongoing work in progress that companies should be constantly seeking to improve and iterate on.
            </p>
          </section>
          <section className="serviceFeatures__row02">
            {ServiceFeaturesList.map((item, index) => (
              <ServiceFeaturesItem key={item.id} Index={index} image={item.img} title={item.title} description={item.desc} />
            ))}
          </section>
        </section>
      </Container>
    </section>
  );
};

export default ServiceFeatures;
