import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center mt-5">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={require('../assets/one.jpeg')} alt="" />
              {/* <ExampleCarouselImage text="First slide" /> */}
              <Carousel.Caption>
                <h3>Margherita</h3>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <img className="d-block w-100"
             src={require('../assets/two.jpeg')} alt="" />
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <Carousel.Caption>
                <h3>Cheese pizza</h3>
                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={require('../assets/three.jpeg')} alt="" />
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <Carousel.Caption>
                <h3>Pepporrani</h3>
                <p className="d-none d-sm-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
      <h2 className="display-5 mt-3 ">Pizza For Every Occasion</h2>
      <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
     
    </Container>
  );
};
