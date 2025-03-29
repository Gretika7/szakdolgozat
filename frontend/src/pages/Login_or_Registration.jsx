import { Container, Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
    const [regUsername, setRegUsername]=useState("");
    const [regEmail, setRegEmail]=useState("");
    const [regPassword, setRegPassword]=useState("");
    const [regPasswordAgain, setRegPasswordAgain]=useState("");
    const [error, setError]=useState("");

    const [logUsername, setLogUsername]=useState("");
    const [logPassword, setLogPassword]=useState("");
    
    const navigate = useNavigate();

    const handleRegister = async (e)=>{
        e.preventDefault();
        try {
            if (regPassword === regPasswordAgain) {
                const response = await fetch("http://localhost:5000/register",{
                    method:"POST",
                    headers: {
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({ 
                        "username": regUsername, 
                        "email": regEmail, 
                        "password": regPassword 
                    })
                });
                const data = await response.json();
                if(response.ok){
                    alert("Sikeres regisztráció!");
                    setRegUsername("");
                    setRegEmail("");
                    setRegPassword("");
                    setRegPasswordAgain("");
                    navigate("/login-or-registration");
                }else{
                    setError(data.message);
                }
            }
            else {
                alert("A két jelszó nem egyezik!");
            }
        } catch (err) {
            setError("Valami hiba történt!");
        }
    }

    const handleLogin = async (e)=>{
        e.preventDefault();
        setError(null);
        try{
            const response = await fetch("http://localhost:5000/login",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    "username": logUsername,
                    "password": logPassword
                })
            });
            const data = await response.json();
            if(!response.ok){
                setError(data.message);
                return;
            }
            alert("Sikeres bejelentkezés!");
            const token = data.token;
            if (!token) {
                alert("Hiba!");
            }
            else {
                localStorage.setItem("token", token);
                navigate("/");
                window.location.reload();
            }                
        }catch(err){
            setError("Valami hiba történt a bejelentkezés sortán!");
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6} className="rajta pt-5 pb-5" style={{ paddingBottom: "100px" }}>
                    <h2 className="text-center pt-5 mt-5 mb-4 pb-5">Bejelentkezés</h2>
                    <Form onSubmit={handleLogin}>
                        <FloatingLabel label="Felhasználónév" className="mt-5 mb-4 text">
                            <Form.Control id="loginUsername" className="input" type="text" placeholder="Felhasználónév" value={logUsername} onChange={(e) => setLogUsername(e.target.value)}/>
                        </FloatingLabel>
                        <FloatingLabel className="text" label="Jelszó">
                            <Form.Control id="loginPassword" className="input" type="password" placeholder="Jelszó" value={logPassword} onChange={(e) => setLogPassword(e.target.value)}/>
                        </FloatingLabel>
                        <Button type="submit" className="mt-5 mb-5 d-flex justify-content-center mx-auto " variant="light">Bejelentkezés</Button>
                    </Form>
                </Col>
                <Col xs={12} md={6} className="rajta pt-5 pb-5" style={{ paddingBottom: "100px" }}>
                    <h2 className="text-center pt-5 mt-5 mb-4 pb-5">Regisztráció</h2>
                    <Form onSubmit={handleRegister}>
                        <FloatingLabel label="Felhasználónév" className="mt-5 mb-4 text">
                            <Form.Control id="registrationUsername" className="input" type="text" placeholder="Felhasználónév" value={regUsername} onChange={(e) => setRegUsername(e.target.value)}/>
                        </FloatingLabel>
                        <FloatingLabel label="Email-cím" className="mb-4 text">
                            <Form.Control id="registrationEmail" className="input" type="email" placeholder="Email-cím" value={regEmail} onChange={(e) => setRegEmail(e.target.value)}/>
                        </FloatingLabel>
                        <Row>
                            <Col>
                                <FloatingLabel className="text" label="Jelszó">
                                    <Form.Control id="registrationPassword" className="input" type="password" placeholder="Jelszó" value={regPassword} onChange={(e) => setRegPassword(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel className="text" label="Jelszó újra">
                                    <Form.Control id="registrationPasswordAgain" className="input" type="password" placeholder="Jelszó újra" value={regPasswordAgain} onChange={(e) => setRegPasswordAgain(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Button type="submit" className="mt-5 mb-5 d-flex justify-content-center mx-auto" variant="light">Regisztráció</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
