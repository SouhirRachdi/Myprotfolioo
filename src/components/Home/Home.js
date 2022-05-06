import React ,{ useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import Home2 from './Home2';
import Type from  './Type'
import '../../style.css';
const Home = () => {
  
  
 
  return (
    <section>
  <Container fluid className="home-section" id="home">
  <Particle />
        <Container className="home__content">
          <Row>
          <Col  md={7} className="home-header">
            <h1 className="home__text " style={{paddingBottom: '15px'}}> Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> </h1>
            
            <h2 style={{margin:"0px 0px 0px 0px"}} className="home__text "> I’M    
            <strong className="main-name">  SOUHIR RACHDI</strong>
            </h2>
            <div className="typ" style={{  textAlign: "left" }}>
                <Type />
              </div>
            
          </Col>


          <Col md={5} style={{ 
  paddingBottom: 20 ,  willChange: "transform",
  transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
  transform:" perspective(1000px) rotateX(0deg) rotateY(1deg) scale3d(1, 1, 1)"}}>

              <img
                src="/image.png"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px"  }}
              />
            </Col>
          
          </Row>
        </Container>
        </Container>
<Home2/>
       </section>
  )
}

export default Home