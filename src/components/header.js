import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="NAV">
        <div className="TV">
          <div className="logo">
            <span id="fLine">
              A A F<br></br>
              <span id="sLine">AMAZING.ACTION.FIGURES</span>
            </span>
          </div>

          
        </div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">
                <NavDropdown title="MENU" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">HOME</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    CATALOG
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    ABOUT US
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>

      </div>



    );
  }
}

export default Header;
