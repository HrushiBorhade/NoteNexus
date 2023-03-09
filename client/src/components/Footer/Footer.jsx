import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; NoteNexus</Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a href="https://github.com/HrushiBorhade/">Hrushi Borhade</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
