import React from "react";
import { UncontrolledCarousel, Container, Row, Col } from "reactstrap";

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

const Brand_static_widget = () => {
  return (
      <Container className="border bg-white" >
        <h4>Thương hiệu chính hãng</h4>
        <UncontrolledCarousel items={items} />
        <Row>
          <Col>Sản phẩm 1</Col>
          <Col>Sản phẩm 2</Col>
          <Col>Sản phẩm 3</Col>
          <Col>Sản phẩm 4</Col>
          <Col>Sản phẩm 5</Col>
          <Col>Sản phẩm 6</Col>
        </Row>
      </Container>
  );
};

export default Brand_static_widget;
