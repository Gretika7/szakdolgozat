import { Container, Col, Row, Table, Image } from 'react-bootstrap';

export default () => {
    return (
        <Container className="text-center">
            <Row className='mb-5'>
                <h1 className="mb-3 mt-3">Játékaim</h1>
                <Col xs={12} md={12}>
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Játék neve</th>
                                <th>Ár</th>
                                <th>Vásárlás dátuma</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fortnite</td>
                                <td>8000 Ft</td>
                                <td>2025. 03. 29.</td>
                            </tr>
                            <tr>
                                <td>GTA 5</td>
                                <td>15000 Ft</td>
                                <td>2025. 03. 29.</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} className="text-center">
                    <Image src="../images/gamer.png" fluid className="mt-2 mb-5"></Image>
                </Col>
            </Row>
        </Container>
    );
}
