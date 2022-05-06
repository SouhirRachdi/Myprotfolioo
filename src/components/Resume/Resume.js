import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  

const Resume = () => {
  return (
   
 <Container fluid className="resume-section">

 <Row className="resume">
 <Document file="/SouhirCv.pdf"  className="d-flex justify-content-center">
   <Page pageNumber={1}  />
 </Document>
</Row>
        < Row className="Skills_row__E86CT" style={{ justifyContent: "center", position: "relative",paddingTop:20 }} >
          <a href="/SouhirCv.pdf" download="Souhir Cv" style={{textDecoration: 'none'}}>
            <Button className="Skills_downloadbtn__DRxN9">
              <h1 className="Skills_white__WTef8">Download Cv</h1>
              </Button>
              </a>
            
        </Row>
        </Container>

  
  );
}


export default Resume