import React from "react";
import Container from "../../../../components/common/Container";
import "./About.css";
import About__img_left from "../../../../assets/image/service01.jpg";
import About__img_right from "../../../../assets/image/service02.jpg";
import avatar from "../../../../assets/icon/avatar.svg";
import icon from "../../../../assets/icon/Vector 2639.png";
import vector from "../../../../assets/icon/union.png";

const About = () => {
  return (
    <section className="about">
      <Container>
        <section className="about__group">
          <figure className="about__image">
            <img src={About__img_left} alt="" className="about__img-left" />
            <img src={About__img_right} alt="" className="about__img-right" />
            <img src={icon} alt="" className="uniom" />
            <img src={vector} alt="" className="uniom01" />
          </figure>
          <section className="about__desingners">
            <p className="about__desingners-desc">All Desingners</p>
            <p className="about__desingners-total">Total Balance</p>
            <div>
              <p className="about__desingners-action">40%</p>
              <span className="about__ratio-desingner"></span>
              <p className="about__desingners-action about__desingners-end">Loading...</p>
            </div>
            <div className="about__desingner-dots">
              <span className="about__desingner-dot"></span>
            </div>
            <div className="about__desingners-avatarGroup">
              <p className="about__desingners-action ">Teams:</p>
              <div className="about__desingners-avatars">
                <img src={avatar} alt="" className="about__desingners-avatar" />
                <img src={avatar} alt="" className="about__desingners-avatar" />
                <img src={avatar} alt="" className="about__desingners-avatar" />
                <img src={avatar} alt="" className="about__desingners-avatar" />
              </div>
            </div>
          </section>
          <section className="about__title">
            <div className="about__title-row01">
              <span className="about__row01-desc">ABOUT US</span>
            </div>
            <div>
              <h3 className="about__title">We are an extention of your creative team</h3>
              <p className="about__desc">
                At the start of every project, we cusomizea detailed project plan together with you set exectationns ensure alighment and define key milestones and deiverbles.
              </p>
              <div className="about__title-row02">
                <span className="about__ratio">48%</span>
                <p className="about__row02--desc">Are you strive for two things in design simplicity and clarity. Great design is born of those two things</p>
              </div>
              <span className="about__underlined"></span>
              <div className="about__title-row02">
                <span className="about__ratio">26%</span>
                <p className="about__row02--desc">Are you strive for two things in design simplicity and clarity. Great design is born of those two things</p>
              </div>
              <span className="about__underlined"></span>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default About;
