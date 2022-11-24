import React from "react";
import gaben from "./images/gaben.jpg";
import rachel from "./images/rachel.jpg";
import gael from "./images/Gael.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Portfolio extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm>
            <figure>
              <img src={gaben}></img>
              <figcaption>Gaben</figcaption>
            </figure>
          </Col>
          <Col sm>
            <figure>
              <img src={rachel}></img>
              <figcaption>rachel</figcaption>
            </figure>
          </Col>
          <Col sm>
            <figure>
              <img src={gael}></img>
              <figcaption>gael</figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    );
  }
}
