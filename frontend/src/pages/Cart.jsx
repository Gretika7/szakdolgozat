import React, {useState} from 'react';
import {Container, Row, Col, Button, Form, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Cart</h1>
                    <h3>Total: Ft</h3>
                    <Form>
                        <Form.Group>
                            <Form.Label>Discount code</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                />
                                <InputGroup.Append>
                                    <Button>Apply</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                    <h3>Discounted price:Ft</h3>
                    <Button>Purchase</Button>
                </Col>
            </Row>
            </Container>
    )
}