
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../image/inshaallah_logo.jpg";

import {Navigate, Outlet} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {Link} from "react-router-dom";

export default function WebNavbar(){
    
    
    return (
      <>
        <Navbar collapseOnClick expand="lg" bg="primary" variant="white">
      <Container>
        <Navbar.Brand ><img src={logo} alt="log" height="60px" width="60px" className="rounded-circle"></img>
        </Navbar.Brand>
        <div className="row" >
        <div className="col-xs-3"><h5>TrustOn Bank</h5>
        <h6>A bank for financial inclusion</h6>
        </div>
        </div>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{paddingLeft:"8rem"}}>
         
          <Nav className="me-auto">
            
            <LinkContainer to="home"><Nav.Link >HOME</Nav.Link></LinkContainer>
            <LinkContainer to="openaccount"><Nav.Link >OPENACCOUNT</Nav.Link></LinkContainer>
            <NavDropdown title="SERVICE" id="collasible-nav-dropdown" className="dropp">
            <LinkContainer to="service/deposit"><Nav.Link >DEPOSIT</Nav.Link></LinkContainer>
            <LinkContainer to="service/loan"><Nav.Link >LOAN</Nav.Link></LinkContainer>
            <LinkContainer to="service/trajection"><Nav.Link >TRAJECTION</Nav.Link></LinkContainer>
            </NavDropdown>
            <LinkContainer to="/personalbanking"><Nav.Link >PERSONAL BANKING</Nav.Link></LinkContainer>
            <LinkContainer to="/shoping"><Nav.Link >SHOPING</Nav.Link></LinkContainer>
            
          </Nav>
          {/* <Nav>
            <Nav.Link href="deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
}