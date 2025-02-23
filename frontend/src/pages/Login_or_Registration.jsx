import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Login</h2> 
                            <Form.Label>Felhasználónév</Form.Label>
                            <Form.Control
                                type="text"
                                value=""
                                placeholder="Enter your username"
                            />
                            <Form.Label>Jelszó</Form.Label>
                            <Form.Control
                                type="password"
                                value=""
                                placeholder="Enter your password"
                            />
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                </Col>
                <Col>
                    <h2>Regisztráció</h2> 
                            <Form.Label>Felhasználónév</Form.Label>
                            <Form.Control
                                type="text"
                                value=""
                                placeholder="Enter your username"
                            />
                              <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="text"
                                value=""
                                placeholder="Enter your username"
                            />
                            <Form.Label>Jelszó</Form.Label>
                            <Form.Control
                                type="password"
                                value=""
                                placeholder="Enter your password"
                            />
                        <Button style={{color:""}} type="submit">
                            Login
                        </Button>
                </Col>
            </Row>
        </Container>
    );
};
