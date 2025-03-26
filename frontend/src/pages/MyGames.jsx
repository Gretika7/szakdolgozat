import { Container, Col, Row, Table, Button } from 'react-bootstrap';

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
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
