import { Container, Row, Col, Button, Form, FloatingLabel} from "react-bootstrap";

export default () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6} className="rajta" style={{paddingBottom:"100px"}}>
                    <h2 className="text-center pt-5 mt-4 mb-4 pb-5">Bejelentkezés</h2> 
                    <Form>
                        <FloatingLabel 
                            controlId="floatingInput"
                            label="Felhasználónév"
                            className="mb-3 text"
                        >
                        <Form.Control className="input" 
                            type="text" 
                            placeholder="Felhasználónév" 
                        />
                        </FloatingLabel>
                        <FloatingLabel 
                            className="text"
                            controlId="floatingPassword" 
                            label="Jelszó">
                        <Form.Control className="input"
                            type="password" 
                            placeholder="Jelszó" 
                        />
                        </FloatingLabel>
                    <Button className="mt-3 d-flex justify-content-center mx-auto " variant="light">
                        Bejelentkezés
                    </Button>
                    </Form>
                </Col>

                <Col xs={12} md={6} className="rajta" style={{paddingBottom:"100px"}}>
                    <h2 className="text-center pt-5 mt-4 mb-4 pb-5">Regisztráció</h2> 
                        <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Felhasználónév"
                            className="mb-3 text"
                        >
                        <Form.Control className="input" 
                            type="text" 
                            placeholder="Felhasználónév" 
                        />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email-cím"
                            className="mb-3 text"
                        >
                        <Form.Control className="input"
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
                        <Form.Control className="input"
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
                        <Form.Control className="input"
                            type="password" 
                            placeholder="Jelszó újra" 
                        />
                        </FloatingLabel>
                            </Col>
                        </Row>

                    <Button className="mt-3 d-flex justify-content-center mx-auto" variant="light">
                            Regisztráció
                    </Button>
                    </Form>    
                </Col>
            </Row>
        </Container>
    );
};
