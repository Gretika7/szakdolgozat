import { Container, Col, Row, Table, Button, Image } from 'react-bootstrap';

export default () => {
    return (
        <Container className="text-center">
            <Row className='mb-5'>
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
                            <tr>
                                <td>Fortnite</td>
                                <td>8000 Ft</td>
                            </tr>
                            <tr>
                                <td>GTA 5</td>
                                <td>15000 Ft</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col xs={12} md={4}>
                    <h2>Összesen: 23000 Ft</h2>
                    <Button variant='light' className='mt-4'>Vásárlás</Button>
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
