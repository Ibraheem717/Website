import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import LinkedIn from '../assets/img/nav-icon1.svg';
import GitHub from '../assets/img/github.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{marginTop: "10px"}}>
              <a href="#"><img src={LinkedIn} alt="Icon" /></a>
              <a href="#"><img src={GitHub} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}