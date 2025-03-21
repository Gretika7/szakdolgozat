import { Container, Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";

export default () => {
    return (
        <Container className="text-center" style={{color: "white"}}>
            <h1 className="mb-3 mt-3">Kosaram</h1>
            <Row>
                <Col xs={12} md={8}>

                </Col>
                <Col xs={12} md={4}>
                    <p>Kedvezmény kódja</p>
                    <Form>
                        <FloatingLabel 
                            controlId="floatingInput"
                            label="Kód"
                            className="mb-3 text"
                        >
                        <Form.Control className="input" 
                            type="text" 
                            placeholder="Kód" 
                        />
                        </FloatingLabel>
                    <Button variant="light">
                        Küldés
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}