import { Container, Row, Col, Card, Image} from "react-bootstrap";

export default () => {
    return (
        <Container className="text-center" style={{color: "white"}}>
            <h1 className="mb-3 mt-3">Játékaim</h1>
            <Row>
                <Col xs={12} md={4}>
                    <h2>Játék neve</h2>
                    <ul style={{textAlign: "left"}}>
                        <li>Játék</li>
                        <li>Játék</li>
                        <li>Játék</li>
                        <li>Játék</li>
                        <li>Játék</li>
                    </ul>
                </Col>
                <Col xs={12} md={4}>
                    <h2>Vásárlás dátuma</h2>
                    <ul style={{textAlign: "left"}}>
                        <li>Vásárlás dátuma</li>
                        <li>Vásárlás dátuma</li>
                        <li>Vásárlás dátuma</li>
                        <li>Vásárlás dátuma</li>
                        <li>Vásárlás dátuma</li>
                    </ul>
                </Col>
                <Col xs={12} md={4}>
                    <h2>Ár</h2>
                    <ul style={{textAlign: "left"}}>
                        <li>Ára</li>
                        <li>Ára</li>
                        <li>Ára</li>
                        <li>Ára</li>
                        <li>Ára</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}
