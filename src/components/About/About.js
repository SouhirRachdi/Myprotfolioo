import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import '../../style.css';
function About() {
  return (
    <Container fluid className="about-section">
     
      <Container className="containerA" >
        <Row  style={{ justifyContent: "center"}}>
          <Col
            
            style={{
              justifyContent: "center",
              
              paddingBottom: "70px",
            }}
          >
            <h1 style={{ fontSize: "2.1em" }}>
              Know Who <strong className="purple">I'M..</strong>
            </h1>
            <h1 style={{ fontSize: "2.1em" }}>
            Discover My <strong className="purple"> Competencies..</strong>
            </h1>

     <div className="cards">
  <div className="boxes">
    <div className="imgBoxes">
      <img src="/img.jpg" alt />
    </div>
    <div className="contente">
      <h2>SOUHIR RACHDI<br />
        <span>WEB DEVELOPER</span></h2>
    </div>
  </div></div>

          </Col>
        </Row>
       
        <div className="pro">
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
          </div> <br />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      
      </Container>
    </Container>
  );
}

export default About;