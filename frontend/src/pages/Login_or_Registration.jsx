import { Container, Row, Col, Button, Form, FloatingLabel} from "react-bootstrap";
import React, {useState} from "react";

export default () => {


const [loginUsername, setLoginUsername] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [registrationUsername, setRegistrationUsername] = useState("");
const [registrationEmail, setRegistrationEmail] = useState("");
const [registrationPassword, setRegistrationPassword] = useState("");
const [registrationPasswordAgain, setRegistrationPasswordAgain] = useState("");


    const handleLogin = async (e) => {
        console.log("Login");
        e.preventDefault();
        const response = await fetch("http://localhost:5000/Bejelentkezes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: loginUsername,
                password: loginPassword,
            }),
        });
    }
    const handleRegistration = async (e) => {
        console.log("Registration");
        e.preventDefault();
        const response = await fetch("http://localhost:5000/Regisztracio", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: registrationUsername,
                email: registrationEmail,
                password: registrationPassword,
                passwordAgain: registrationPasswordAgain,
            }),
        });
        const data = await response.json();
        if(response.ok){
            alert(data.message);
            setRegistrationEmail("");
            setRegistrationPassword("");
            setRegistrationPasswordAgain("");
            setRegistrationUsername("");
        }
        else{
            alert(data.error);
        }
    }


    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6} className="rajta pt-5 pb-5" style={{paddingBottom:"100px"}}>
                    <h2 className="text-center pt-5 mt-4 mb-4 pb-5">Bejelentkezés</h2> 
                    <Form onSubmit={handleLogin}>
                        <FloatingLabel 
                            controlId="floatingInput"
                            label="Felhasználónév"
                            className="mb-3 text"
                        >
                        <Form.Control 
                        
                            id="loginUsername"
                            onChange={(e) => setLoginUsername(e.target.value)}
                            className="input" 
                            type="text" 
                            placeholder="Felhasználónév" 
                        />
                        </FloatingLabel>
                        <FloatingLabel 
                            className="text"
                            controlId="floatingPassword" 
                            label="Jelszó">
                        <Form.Control 
                            id="loginPassword"
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="input"
                            type="password" 
                            placeholder="Jelszó" 
                        />
                        </FloatingLabel>
                    <Button type="submit" className="mt-5 mb-5 d-flex justify-content-center mx-auto " variant="light">
                        Bejelentkezés
                    </Button>
                    </Form>
                </Col>

                <Col xs={12} md={6} className="rajta pt-5 pb-5" style={{paddingBottom:"100px"}}>
                    <h2 className="text-center pt-5 mt-4 mb-4 pb-5">Regisztráció</h2> 
                        <Form onSubmit={handleRegistration}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Felhasználónév"
                            className="mb-3 text"
                        >
                        <Form.Control
                        id="registrationUsername"
                        onChange={(e) => setRegistrationUsername(e.target.value)}
                        className="input" 
                            type="text" 
                            placeholder="Felhasználónév" 
                        />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email-cím"
                            className="mb-3 text"
                        >
                        <Form.Control 
                        id="registrationEmail"
                        onChange={(e) => setRegistrationEmail(e.target.value)}
                        className="input"
                            type="email" 
                            placeholder="Email-cím" 
                        />
                        </FloatingLabel>

                        <Row>
                            <Col>
                            <FloatingLabel 
                             className="text"
                            controlId="floatingPassword" 
                            label="Jelszó">
                        <Form.Control 
                        id="registrationPassword"
                        onChange={(e) => setRegistrationPassword(e.target.value)}
                        className="input"
                            type="password" 
                            placeholder="Jelszó" 
                        />
                        </FloatingLabel>
                            </Col>

                            <Col>
                            <FloatingLabel
                            className="text"
                            controlId="floatingPassword" 
                            label ="Jelszó újra">
                        <Form.Control 
                        id="registrationPasswordAgain"
                        onChange={(e) => setRegistrationPasswordAgain(e.target.value)}
                        className="input"
                            type="password" 
                            placeholder="Jelszó újra" 
                        />
                        </FloatingLabel>
                            </Col>
                        </Row>

                    <Button type = "submit" className="mt-5 mb-5 d-flex justify-content-center mx-auto" variant="light">
                            Regisztráció
                    </Button>
                    </Form>    
                </Col>
            </Row>
        </Container>
    );
};
