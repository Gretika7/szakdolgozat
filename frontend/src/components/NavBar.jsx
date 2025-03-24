import { Container, Nav, Navbar,Image } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default () => {
    const storedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(storedTheme);
    const [showSidePanel, setShowSidePanel] = useState(false);
    const [isYingYangClicked, setIsYingYangClicked] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.className = newTheme;
    };

    const handleUserClick = () => {
        setShowSidePanel(!showSidePanel);
    };

    const handleYingYangClick = () => {
        setIsYingYangClicked(!isYingYangClicked);
        toggleTheme();
    };

    document.body.className = theme;

    return (
        <Navbar expand="lg" sticky="top" style={{backgroundColor:"#3e2246"}} className="pt-3 pb-3 navbar-dark">
            <Navbar.Brand as={Link} to="/" style={{color:"white",marginLeft:"10px", fontSize: "25px"}} className="title">
                    Gamer's Market
                </Navbar.Brand>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" style={{fontSize: "20px"}}>
                        <Nav.Link as={Link} to="/" style={{color:"white"}}>Főoldal</Nav.Link>
                        <Nav.Link as={Link} to="/about" style={{color:"white"}}>Rólunk</Nav.Link>
                        <Nav.Link as={Link} to="/login-or-registration" style={{color:"white"}}>Bejelentkezés/Regisztráció</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Image
                className={`yingyang-icon ${isYingYangClicked ? 'active' : ''}`}
                style={{ cursor: "pointer", width: "40px", marginRight: "10px", marginLeft: "10px" }}
                src="../images/yingyang.svg"
                onClick={handleYingYangClick}
            />
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor:"white" }}></Navbar.Toggle>
        </Navbar>
    );
}