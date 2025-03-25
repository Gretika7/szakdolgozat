import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

export default () => {
    const storedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(storedTheme);
    const [showSidePanel, setShowSidePanel] = useState(false);
    const [isYingYangClicked, setIsYingYangClicked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({ username: "", email: "" });
    const [newUsername, setNewUsername] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if(!token) {
                    setLoading(false);
                    return;
                }
                const response = await fetch("http://localhost:5000/user", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if(!response.ok) {
                    if(response.status === 401) {
                        localStorage.removeItem("token");
                        navigate("/login");
                    }
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if(data && data.username && data.email) {
                    setUserData(data);
                    setNewUsername(data.username);
                    setNewEmail(data.email);
                }else{
                    setError("Hiba történt a felhasználó adatainak lekérdezése közben!");
                }
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        }
        fetchUserData();
    }, [navigate]);

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

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    };

    const handleEditClick = () => {
        setIsEditing(true);
        setNewUsername(userData.username);
        setNewEmail(userData.email);
    };

    const handleSaveClick = async () => {
        try {
            const token = localStorage.getItem("token");
            if(!token) {
                console.error("No token found for update");
                return;
            }
            const response = await fetch("http://localhost:5000/user",{
                method:"PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: newUsername,
                    email: newEmail
                }),
            });
            if(!response.ok) {
                if(response.status === 401) {
                    localStorage.removeItem("token");
                    navigate("/login");
                }
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status} message: ${errorData.message}`);
            }

            const updatedUserData = await response.json();
            setUserData(updatedUserData);
            setIsEditing(false);
            alert("Sikeresen módosítottad a felhasználói adataidat!");

        }catch(err) {
            console.error(err);
            alert("Hiba történt a felhasználói adatok módosítása közben!");
            setError(err.message);
        }
    };

    const handleCancelEditClick = () => {
        setIsEditing(false);
        setNewUsername(userData.username);
        setNewEmail(userData.email);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "username") {
            setNewUsername(value);
        } else if (name === "email") {
            setNewEmail(value);
        }
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
                    title="Profil"
                    onClick={handleUserClick}
                />
                <Image
                    style={{ cursor: "pointer", width: "40px", marginRight: "10px", marginLeft: "10px" }}
                    src="../images/logout.svg"
                    title="Kijelentkezés"
                    onClick={handleLogout}
                />
                <Image
                    className={`yingyang-icon ${isYingYangClicked ? 'active' : ''}`}
                    style={{ cursor: "pointer", width: "40px", marginRight: "10px", marginLeft: "10px" }}
                    src="../images/yingyang.svg"
                    title="Téma váltás"
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
                        {isEditing ? (
                            <input
                                type="text"
                                name="username"
                                value={newUsername}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        ) : (
                            <p>{userData.username}</p>
                        )}
                        <h4>E-mail cím</h4>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={newEmail}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        ) : (
                            <p>{userData.email}</p>
                        )}
                         <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                            {isEditing ? (
                                <>
                                <Image
                                    style={{ width: "40px", cursor: "pointer" }}
                                    src="../images/save.svg"
                                    title="Mentés"
                                    onClick={handleSaveClick}
                                />
                                <Image
                                    style={{ width: "40px", cursor: "pointer" }}
                                    src="../images/close.svg"
                                    title="Mégsem"
                                    onClick={handleCancelEditClick}
                                />
                            </>
                            ) : (
                                <Image
                                    style={{ width: "40px", cursor: "pointer" }}
                                    src="../images/edit.svg"
                                    title="Módosítás"
                                    onClick={handleEditClick}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
