// import React, { Component, useState } from "react";
import React, { useEffect, useState } from "react";
import { Link,  animateScroll as scroll} from 'react-scroll';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "./NavigationBar.css";

const NavigationBar = () => {
// export default class NavigationBar extends Component {
  // Starts navbar as light for false, dark is true
  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }

  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground);
  })

  // render() {
    return (
      <Navbar expand="lg"  sticky="top" className={navbar? "nav-dark" : "nav-light"}>
        <Container fluid>
          <Navbar.Brand onClick={() => {
            scroll.scrollToTop() 
          }} style={{cursor: "pointer"}}>
          {/* Adriane Hairston */}
          <img
        src="/AH_logo_dark.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Adriane Hairston logo"
      />
          </Navbar.Brand>
          {/* <Link to='/'>Adriane Hairston</Link> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* <Nav.Link href="#action2">About</Nav.Link> */}
             <Nav.Link> <Link to="about-page" smooth={true} duration={500} offset={-100}>About</Link></Nav.Link>
             <Nav.Link> <Link to="dev-page" smooth={true} duration={500} offset={-100}>Development</Link></Nav.Link>
             <Nav.Link> <Link to="contact-page" smooth={true} duration={500} offset={-100}>Contact</Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  // }
}


// };

export default NavigationBar;