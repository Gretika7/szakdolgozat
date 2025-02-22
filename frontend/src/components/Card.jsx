import { Button, Card } from 'react-bootstrap';

export default ({ title, img, text}) => {
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">Cart</Button>
                <Button variant="primary">Info</Button>
            </Card.Body>
        </Card>
    );
}