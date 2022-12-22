import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../pages/Home.js" ;
import Opportunities from "../pages/Opportunities.js" ;
import Startups from "../pages/Startups.js"; 
import JoinATeam from '../pages/JoinATeam.js';
import BuildYourTeam from '../pages/BuildYourTeam.js';



function NavbarComp () {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}>
                        <img
                        src="https://www.clipartmax.com/png/small/219-2197783_training-documents-google-logo-icon-png.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="wtf"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/opportunities"}>Opportunities</Nav.Link>
                        <Nav.Link as={Link} to={"/startups"}>Startups</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Nav.Link as={Link} to={"/joinateam"}>Join A Team</Nav.Link>
                            <Nav.Link as={Link} to={"/buildyourteam"}>Build Your Team</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/opportunities" element={<Opportunities />} />
                    <Route path="/startups" element={<Startups />} />
                    <Route path="/joinateam" element={<JoinATeam />} />
                    <Route path="/buildyourteam" element={<BuildYourTeam />} />

                </Routes>
            </div>
        </Router>
    )
}

export default NavbarComp