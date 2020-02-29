import React from "react"
import "./navigation.scss"
import { Navbar, Nav,} from "react-bootstrap"

const Navigation = () => {
    return (
        <div className="container">
            <Navbar bg="transparent" expand="lg" className="nav-bg">
            <Navbar.Brand href="/" className="logo">MLG Cat</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/" className="home-link">Home</Nav.Link>
                    <Nav.Link href="/cat"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>Cat Page</Nav.Link>
                      <Nav.Link href="/lotr"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>LOTR Page</Nav.Link>           
                    </Nav>            
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation