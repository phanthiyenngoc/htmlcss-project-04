import React from "react";
import "./Proccess.css";
import Container from "../../../common/Container";
import banner from "../../../../assets/image/proccess.png";

function ProccessItem(props) {
  const { proccessIndex, numerical_order, title, title_desc, description } = props;
  console.log(props);
  return (
    <section className={proccessIndex == 0 ? "prosseccItiem index_0 " : "prosseccItiem"}>
      <span className="prosseccItiem_numerical">{numerical_order}</span>
      <div>
        <span className="prosseccItiem_title">{title}</span>
        <p className="prosseccItiem_title-more">{title_desc}</p>
      </div>
      <p className="prosseccItiem_desc">{description}</p>
      <div className="prosseccItiem_underlined"></div>
    </section>
  );
}
const Proccess = () => {
  const proccessList = [
    {
      id: 1,
      title_number: "01.",
      title: "Project idea",
      title_more: "Learn More",
      desc: "",
    },
    {
      id: 2,
      title_number: "02.",
      title: "Brainstormaing",
      title_more: "",
      desc: "We customse a ensure aligment and difine key mileones and defiverables experience tells us the best solutions are the ones  deated with clients.",
    },

    {
      id: 3,
      title_number: "03.",
      title: "Execution",
      title_more: "",
      desc: "We customse a ensure aligment and difine key mileones and defiverables experience tells us the best solutions are the ones  deated with clients.",
    },
  ];
  return (
    <section className="proccess">
      <Container>
        <section className="prossecc__title">
          <p className="prossecc__title-desc">OUR PROCESS</p>
          <h3 className="prossecc__title-sub">A simple ,yet effective three step process</h3>
        </section>
        <section className="proccess__group">
          {proccessList.map((process, index) => (
            <ProccessItem key={process.id} proccessIndex={index} numerical_order={process.title_number} title={process.title} title_desc={process.title_more} description={process.desc} />
          ))}
          <figure className="proccess__banner-img">
            <img src={banner} alt="" className="proccess__banner" />
          </figure>
        </section>
      </Container>
    </section>
  );
};

export default Proccess;
