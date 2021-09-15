import dealFlashIcon from "../../assets/images/dealFlashIcon.svg";
import giasoc from "../../assets/images/giasoc.svg";
import homnay from "../../assets/images/homnay.svg";
import React, { useState } from "react";
import { UncontrolledCarousel, Container } from "reactstrap";

const items = [
  {
    src: "",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
  },
  {
    src: "",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
  },
  {
    src: "",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
];

const Home_deal = (props) => {
  return (
    <Container className="home_deal border bg-white">
      <div className="header d-flex">
        <img src={giasoc} alt="giasoc" />
        <img src={dealFlashIcon} alt="dealFlashIcon" />
        <img src={homnay} alt="homnay" />
      </div>
      <div className="body">
        <UncontrolledCarousel items={items} />
      </div>
    </Container>
  );
};

export default Home_deal;
