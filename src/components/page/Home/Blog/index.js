import React from "react";
import "./Blog.css";
import Container from "../../../../components/common/Container";
import Button from "../../../../components/common/Button";

import blog01 from "../../../../assets/image/service01.jpg";
import blog02 from "../../../../assets/image/service02.jpg";
import blog03 from "../../../../assets/image/service03.jpg";

function BlogItem(props) {
  const { blogIndex, img, button, desc, time } = props;
  return (
    <section className="blog_item">
      <img src={img} alt="" className="blog__item--img" />
      <section className="blog__item-title">
        <div className="blog__item-button">
          <Button className="blog__item--btn">{button}</Button>
        </div>
        <p className="blog__item--desc">{desc}</p>
        <span className={blogIndex == 2 ? "blog__item--indelined index_2" : "blog__item--indelined"}></span>
        <div className="blog__item--daytime">
          <span className="blog__item--time">{time}</span>
        </div>
      </section>
    </section>
  );
}

const Blog = () => {
  const blogItem = [
    {
      id: 1,
      img: blog01,
      btn: "STORIES",
      desc: "What did we learn from nunning over 100 design sprints in less the year?",
      time: "JANUARY 29, 2022",
    },
    {
      id: 2,
      img: blog02,
      btn: "STORIES",
      desc: "The difference between the UI/UX design a simple guide for beginner’s",
      time: "JANUARY 29, 2022",
    },
    {
      id: 3,
      img: blog03,
      btn: "STORIES",
      desc: "How marketing can help your business more than anything.",
      time: "JANUARY 29, 2022",
    },
  ];
  return (
    <section className="blog">
      <Container>
        <section className="Blog__row01">
          <p className="blog__row01--title">BLOG & ARTICLES</p>
          <div className="blog__row01-group">
            <h3 className="blog__row01--sub-title">Take a look at our latest articles and resources</h3>
            <p className="blog__row01--desc">The best agency are the ones ideated with clients. we corporate your ideas with memorable</p>
          </div>
        </section>
        <section className="blog__row02">
          {blogItem.map((item, index) => (
            <BlogItem key={item.id} blogIndex={index} img={item.img} button={item.btn} desc={item.desc} time={item.time} />
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Blog;
