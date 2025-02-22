import { Container, Nav, Navbar,Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
    return (
        <Navbar expand="lg" sticky="top" style={{backgroundColor:"#3e2246"}}>
            <Navbar.Brand as={Link} to="/" style={{color:"white",marginLeft:"10px"}} className="title">
                    Gamer's Market
                </Navbar.Brand>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/about" style={{color:"white"}}>Rólunk</Nav.Link>
                        <Nav.Link as={Link} to="/cart" style={{color:"white"}}>Kosár</Nav.Link>
                        <Nav.Link as={Link} to="/login_or_registration" style={{color:"white"}}>Bejelentkezés/Regisztráció</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Image style={{cursor:"pointer", width:"40px", marginRight:"10px", marginLeft:"10px"}} src="../images/yingyang.svg"></Image>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor:"white" }}></Navbar.Toggle>
        </Navbar>
    );
}