import { Container, Row, Col, Image } from "react-bootstrap";

export default () => {
    return (
        <Container className="mt-2">
            <Row>
                <Col xs={12} md={12} className="text-center">
                    <h1 className="mt-3">404 - Az oldal nem található</h1>
                    <p>Keresése folyamán rossz oldalra tévedt. Kérem, térjen vissza a Főoldalra!</p>
                    <Image src="../images/error.png" fluid className="mt-5"></Image>
                </Col>
            </Row>
        </Container>
    );
}