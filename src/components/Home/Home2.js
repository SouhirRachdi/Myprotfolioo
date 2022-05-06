import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import '../../style.css';

function Home2() {
  return (
    <Container fluid className="sectionn" id="about">
      <Container>
        <Row>
          <Col md={8} className="descriptionn">
            <h1 style={{ fontSize: "4em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="bodyyy">
              I fell in love with programming and I have at least learnt
              something, I think… 
              <br />
              <br /> I am a Fullstack Web developer located in Gafsa, Tunisia.
              <i>
                <b className="purple">  I am fluent in classics like HTML, CSS and Javascript .. </b>
              </i>
              <br />
              <br />
              I have a Licence degree in System  Communication and Multimedia Industrial , from The ISIMG of Gabes.
             
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
        
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SouhirRachdi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

             
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/souhir-rachdi-9225761a5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
           
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;