import {Col,Row,Image } from 'react-bootstrap';

export default ({ title, img, text}) => {
    return (
        <Row className='mt-4 mb-4' style={{backgroundColor:"#3e2246" , color:"white",textAlign:"center", borderRadius:"5px"}}>
            <Col xs={12} md={9}>
                <Image src={img} fluid></Image>
            </Col>
            <Col xs={12} md={3}>
                <h2>
                    {title}
                </h2>
                <p>{text}</p>
                <Image style={{cursor:"pointer",width:"40px"}} src="../images/cart.svg"></Image>
            </Col>
        </Row>
    );
}