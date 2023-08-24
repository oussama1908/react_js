import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'; // Import your custom CSS file

function Header() {
  return (
    <div className="custom-header mb-8 mt-2"> 
      <Container fluid className="">
        <Row>
          <Col xs={12}>
            <h1 className="text-center">
              WELCOME TO G<strong className="red-o">O</strong> MYC<strong className="red-o">O</strong>DE 
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
