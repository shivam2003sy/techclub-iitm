import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container'
import './header.css'
import logo from './logo.png'
import  About from './About'
import Programs from "./Programs";
import Blog from "./Blog";
import Home from "./Home";
import Join from "./Join"

function Header() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand>
            <Link  style={{ textDecoration: 'none' }} className='link' to="/">
            <img
          alt=""
          src={logo}
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{' '}
                TECH CLUB</Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
              
              
              
            <Nav.Link><Link  className='link' to="/programs" style={{textDecoration: 'none'}}>Our Programs</Link></Nav.Link>
            <Nav.Link><Link className='link' to="/blog" style={{textDecoration: 'none'}}>Blog</Link></Nav.Link>
            <Nav.Link><Link className='link'  to="/About"  style={{ textDecoration: 'none'}}>About Us</Link></Nav.Link>
            
            <Nav.Link><Link className='link' to="/joinus" style={{textDecoration: 'none'}}>Join team</Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>

      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/programs">
          <Programs />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/login">
          <Login/>
          </Route>
          <Route path="/joinus">
          <Join/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        <Redirect TO='/'/>
      </Switch>
    </Router>
  );
}








function Login() {
  return <h2> login signup</h2>;
}

export default Header;
