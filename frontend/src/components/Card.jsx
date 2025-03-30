import {Card, Image} from 'react-bootstrap';
import Modal from "./Modal.jsx";

import { useState, useEffect } from "react";

export default ({ data }) => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLogged(!!token);
    }, []);

    return (
        <Card className='mt-4 mb-4' style={{backgroundColor:"#3e2246" , color:"white", textAlign:"center", height: "400px"}}>
            <Card.Img variant="top" src={`../images/games_images/${data.picture}`}  />
            <Card.Body>
                <Card.Title className='title'>{data.title}</Card.Title>
                <Card.Text>{data.short_description}</Card.Text>
                {isLogged ? <Image style={{cursor:"pointer", width:"40px", marginRight:"10px"}} src ="../images/cart.svg" title="Kosár" ></Image>: ""}
                <Modal data={data}></Modal>
            </Card.Body>
        </Card>
    );
}