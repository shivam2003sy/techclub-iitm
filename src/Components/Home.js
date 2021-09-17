import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Home() {
  return (
    <>
    <Container>
            <Row >
                <Col className='heading' >
                <br/>
                <br/>
                <h1>THE
                  <br/>CREATIVE 
                  <br/>TECH CLUB 
                  <br/>OF SUNDARBANS
                  </h1></Col>
                <Col><img alt='' src="https://source.unsplash.com/270x400/?technology,tech"/></Col>
                <Col> 
                <br/>
                <br/>  
                <button className='button'> <a style={{textDecoration: 'none'}} className='a' href='https://site.sunderbanspod.repl.co/photocon/'>SUNDERBAN HOUSE</a></button>{' '}
                  <br/>
                  <br/>
                   <p>Tech Club Secretary: Moneesh
                     <br/>
                     Tech Club Web Admin : Shivam Singh 
                   </p>
                              
                               </Col>
                
            </Row>
          <Row>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
        
    </>
  );
}

export default Home;
