import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
    return (
        <Navbar expand="lg" sticky="top" style={{backgroundColor:"#3e2246"}}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Főoldal</Nav.Link>
                        <Nav.Link as={Link} to="/about">Rólunk</Nav.Link>
                        <Nav.Link as={Link} to="/cart">Kosár</Nav.Link>
                        <Nav.Link as={Link} to="/login_or_registration">Bejelentkezés/Regisztráció</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            </Container>
        </Navbar>
    );
}