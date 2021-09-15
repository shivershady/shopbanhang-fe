import React from "react";
import { Container, Row, Col } from "reactstrap";

const Home_banner_primary_container = () => {
  return (
    <Container className="border bg-white">
      <Row xs='1' sm='2' md='4'>
        <Col>Sản phẩm 1</Col>
        <Col>Sản phẩm 2</Col>
        <Col>Sản phẩm 3</Col>
        <Col>Sản phẩm 4</Col>
      </Row>
    </Container>
  );
};

export default Home_banner_primary_container;
