import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import ChangeCard from "../components/ChangeCard";
import ChangeImage from "../components/ChangeImage";
import { useEffect,useState } from "react";

export default () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchCard = async () =>{
            try {
                const response =  await fetch("http://localhost:5000/games",{
                    headers:{
                        "Content-Type":"application/json"
                    }
                });
                if(!response.ok){
                    throw new Error("Nem sikerült a játékokat leszedni!");
                }
                const jsonData = await response.json();
                setData(jsonData);
                console.log(jsonData);
            }catch(err){
                console.error(err);
                alert(err.message);
            }
        };
        fetchCard();
    }, []);

    function addToCart(product) {
        console.log(`${JSON.stringify(product)} hozzáadva a kosárhoz!`);
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            localStorage.setItem("cart", JSON.stringify([product.id]));
            alert(`${product.title} hozzáadva a kosárhoz!`);
        } else if (!cart.includes(product.id)) {
            console.log(cart);
            cart.push(product.id);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.title} hozzáadva a kosárhoz!`);
        } else {
            alert(`Ez a termék már a kosárban van!`);
        }
    }

    return (
        <Container>
            <Row>
                <h1 className="text-center mt-3">Főoldal</h1>
                <Col xs={12} md={12} className='mt-4 mb-4'>
                    <ChangeImage></ChangeImage>
                </Col>
            </Row>
            <Row className="mt-4 mb-4">
                {data && data.map((item, index) => (
                    <Col key={index} xs={12} md={3}>
                        <Card data={item} addToCart={() => addToCart(item)}/>
                    </Col>
                ))}
            </Row>
            <Row className="mt-4 mb-4">
                <Col xs={12} md={12}>
                    <ChangeCard></ChangeCard>
                </Col>
            </Row>
        </Container>
    );
}