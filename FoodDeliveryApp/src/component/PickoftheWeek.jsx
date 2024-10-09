import React, { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export const PickoftheWeek = () => {
  const [show, setShow] = useState(false);
  return (
    <section id="musttry" className="my-3">
      <div className="text-center my-2 py-3">
        <h2 className="display-5 text-primary">
          <i class="bi bi-search-heart"></i> Pick Of The Week !
        </h2>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <Image
              src={require("../assets/center.jpeg")}
              fluid={true}
              alt="pizza"
            />
          </Col>
          <Col>
            <div className="p-3">
              <h2 className="h1">Double Cheese Fajita</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt dicta et deleniti velit omnis sint. Ut modi, distinctio
                recusandae, animi porro nisi libero magni labore esse doloremque
                quae reiciendis. Velit?
              </p>
              <Button variant="primary" onClick={()=> setShow(true)}>
                <i class="bi bi-basket"></i> Buy Now
              </Button>
            </div>
          </Col>
        </Row>
        <ToastContainer
          className="position-fixed bottom-0 end-0 p-3"
          position='bottom-end'
          style={{ zIndex: 1 }}
        >
          <Toast onClose={()=> setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Item added to cart.</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};
