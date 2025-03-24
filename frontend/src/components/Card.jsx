import {Card, Image} from 'react-bootstrap';
import Modal from "./Modal.jsx"

import { useState, useEffect } from "react";

export default ({ title, img, text}) => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLogged(!!token);
    }, []);
    return (
        <Card className='mt-4 mb-4' style={{backgroundColor:"#3e2246" , color:"white", textAlign:"center"}}>
            <Card.Img variant="top" src={img}  />
            <Card.Body>
                <Card.Title className='title'>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                {isLogged ? <Image style={{cursor:"pointer", width:"40px", marginRight:"10px"}} src ="../images/cart.svg" ></Image>: ""}
                <Modal></Modal>
            </Card.Body>
        </Card>
    );
}