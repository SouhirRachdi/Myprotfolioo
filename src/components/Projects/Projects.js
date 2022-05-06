import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import Learn from "../../ProjectsPhotos/Learn platform.png";
import movieApp from "../../ProjectsPhotos/movieApp.png";
import shopping from "../../ProjectsPhotos/shopping cart.png";
import weatherApp from "../../ProjectsPhotos/weatherapp.png";


function Projects() {
  return (
    <Container   fluid className="project-section">
 
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4}   className="project-card">
            <ProjectCard
             
              imgPath={Learn}
              isBlog={false}
              title="Learn Platform"
              description="Learn Platform  build with ReactJs - Html - Js - Css -ExpressJs - MongoDB."
              link="https://github.com/SouhirRachdi/projet2.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieApp}
              isBlog={false}
              title="Movie App"
              description="Movie App build with ReactJs - Html - Js - Css"
              link="https://github.com/SouhirRachdi/workshopHooks.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping Card"
              description="Shopping Card build with   Html - Js - Css  "
              link="https://drive.google.com/drive/folders/1AD5RuQfFRFzo6YKqlNINclls5Q93hQoC?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              description="Weather App build with ReactJs - Html - Js - Css - Redux - API "
              link="https://github.com/SouhirRachdi/weatherap.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;