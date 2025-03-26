import { Container, Col, Row, Table, Button } from 'react-bootstrap';

export default () => {
    return (
        <Container fluid className="text-center">
            <Row>
                <h1 className="mb-3 mt-3">Kosaram</h1>
                <Col xs={12} md={8}>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Játék</th>
                                <th>Ár</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </Table>
                </Col>
                <Col xs={12} md={4}>
                    <h2>Összesen: </h2>
                    <Button variant='light'>Vásárlás</Button>
                </Col>
            </Row>
        </Container>
    );
}
