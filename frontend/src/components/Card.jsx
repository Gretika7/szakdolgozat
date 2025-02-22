import {Card, Image} from 'react-bootstrap';

export default ({ title, img, text}) => {
    return (
        <Card className='mt-4 mb-4' style={{backgroundColor:"#3e2246" , color:"white",textAlign:"center"}}>
            <Card.Img variant="top" src={img}  />
            <Card.Body>
                <Card.Title className='title'>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Image style={{cursor:"pointer", width:"40px", marginRight:"10px"}} src ="../images/cart.svg" ></Image>
                <Image style={{cursor:"pointer", width:"40px",marginRight:"10px"}} src="../images/info.svg" ></Image>
            </Card.Body>
        </Card>
    );
}