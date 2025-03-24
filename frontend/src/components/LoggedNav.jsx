import { Container, Nav, Navbar, Image } from "react-bootstrap";
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
        <>
            <Navbar expand="lg" sticky="top" style={{ backgroundColor: "#3e2246" }} className="pt-3 pb-3 navbar-dark">
                <Navbar.Brand as={Link} to="/" style={{ color: "white", marginLeft: "10px", fontSize: "25px" }} className="title">
                    Gamer's Market
                </Navbar.Brand>
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto" style={{fontSize: "20px"}}>
                            <Nav.Link as={Link} to="/" style={{ color: "white" }}>Főoldal</Nav.Link>
                            <Nav.Link as={Link} to="/about" style={{ color: "white" }}>Rólunk</Nav.Link>
                            <Nav.Link as={Link} to="/mycart" style={{ color: "white" }}>Kosaram</Nav.Link>
                            <Nav.Link as={Link} to="/mygames" style={{ color: "white" }}>Játékaim</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Image
                    style={{ cursor: "pointer", width: "40px", marginRight: "10px", marginLeft: "10px" }}
                    src="../images/user.svg"
                    onClick={handleUserClick}
                />
                <Image
                    style={{ cursor: "pointer", width: "40px", marginRight: "10px", marginLeft: "10px" }}
                    src="../images/logout.svg"
                />
                <Image
                    className={`yingyang-icon ${isYingYangClicked ? 'active' : ''}`}
                    style={{ cursor: "pointer", width: "40px", marginRight: "10px", marginLeft: "10px" }}
                    src="../images/yingyang.svg"
                    onClick={handleYingYangClick}
                />
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "white" }}></Navbar.Toggle>
            </Navbar>

            {showSidePanel && (
                <div className={`side-panel ${showSidePanel ? 'show' : ''}`}>
                    <div className="side-panel-content">
                        <button
                            onClick={handleUserClick}
                            className="close-btn"
                        >
                            X
                        </button>
                        <h2>Fiókom</h2>
                        <h4 className="mt-4">Felhasználónév</h4>
                        <p>Ide a felhasználónév</p>
                        <h4>E-mail cím</h4>
                        <p>Ide az e-mail címet</p>
                        <h4>Jelszó</h4>
                        <p>Ide a jelszót csillagokkal</p>
                        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                            <Image style={{ width: "40px", cursor: "pointer" }} src="../images/edit.svg" />
                            <Image style={{ width: "40px", cursor: "pointer" }} src="../images/save.svg" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
