import { Image,Container,Col,Row } from "react-bootstrap";
export default ()=>{
    return(
        <Container fluid style={{backgroundColor:"#3e2246" , color:"white",textAlign:"center"}}>
            <h2 className="pt-3">Elérhetőségek</h2>
            <Row>
                <Col xs={12} md={12}>
                    <Image style={{cursor:"pointer", width:"40px", marginRight:"10px"}} src="../images/discord.svg" fluid></Image>
                    <Image style={{cursor:"pointer", width:"40px",marginLeft:"10px",marginRigth:"10px"}}src="../images/twitter.svg" fluid></Image>
                    <Image style={{cursor:"pointer", width:"40px",marginRight:"10px",marginLeft:"10px",height:"35px"}} src="../images/facebook.svg" fluid></Image>
                    <Image style={{cursor:"pointer", width:"40px",marginLeft:"10px"}} src="../images/instagram.svg" fluid></Image>
                </Col>
            </Row>
            <h5 style={{paddingBottom:"10px",marginBottom:"0px"}}>Copyright 2025</h5>
        </Container>
    );
}