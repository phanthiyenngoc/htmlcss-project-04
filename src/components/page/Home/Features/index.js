import React from "react";
import Container from "../../../../components/common/Container";
import "./Features.css";
import left_arrow from "../../../../assets/icon/left arrow (1).png";
import feature__banner from "../../../../assets/image/hero03.jpg";
import play from "../../../../assets/icon/play.png";

const Feature = () => {
  return (
    <section className="features">
      <Container>
        <section className="feetures__group">
          <section className="features__row01">
            <h3 className="features__row01--title">A quick glance of our past projects</h3>
            <section className="features__row01--desc">
              <p className="features__row01--description">Are you strive for the fast project simplicity and clarity. Great design is born of those two things.</p>
              <div className="features__row01--group">
                <span className="features__row01--browse">Browse all Projects</span>
                <img src={left_arrow} alt="" className="features__row01--icon" />
              </div>
            </section>
          </section>
          <figure className="feature__row02">
            <img src={feature__banner} alt="" className="features__row02--image" />
            <div className="features__row02-icon">
              <img src={play} alt="" className="features__row02--submit" />
            </div>
          </figure>
        </section>
      </Container>
    </section>
  );
};

export default Feature;
