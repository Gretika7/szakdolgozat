import { Container, Col, Row, Table, Button, Image } from 'react-bootstrap';
import { useState, useEffect } from "react";

export default () => {
    const [data, setData] = useState([]);
    const [price, setPrice] = useState(0);

    useEffect(()=>{
        const fetchCard = async () =>{
            try {
                const cart = localStorage.getItem("cart");

                if (!cart) {
                    localStorage.setItem("cart", JSON.stringify([]));
                    cart = [];
                }

                const response =  await fetch("http://localhost:5000/games",{
                    headers:{
                        "Content-Type":"application/json"
                    }
                });

                if(!response.ok){
                    throw new Error("Hiba a játékok betöltésekor.");
                }

                const jsonData = await response.json();

                const data = [];

                for (const product of jsonData) {
                    if (cart.includes(product.id)) {
                        data.push(product);
                    }
                }

                setData(data);

                let price = 0;

                for (const product of data) {
                    price += product.price;
                }

                setPrice(price);
            }catch(err){
                console.error(err);
                alert(err.message);
            }
        };
        fetchCard();
    }, []);

    function deleteFromCart(product) {
        const newData = data.filter((elem) => elem.id != product.id);
        console.log(newData);
        setData(newData);

        const cart = JSON.parse(localStorage.getItem("cart"));
        const newCart = cart.filter((product_id) => product_id != product.id);
        localStorage.setItem("cart", JSON.stringify(newCart));

        setPrice(price - product.price);

        alert(`${product.title} sikeresen eltávolítva.`);
    }

    function emptyCart() {
        for (const product of data) {
            const newData = data.filter((elem) => elem.id != product.id);
            console.log(newData);

            const cart = JSON.parse(localStorage.getItem("cart"));
            const newCart = cart.filter((product_id) => product_id != product.id);
            localStorage.setItem("cart", JSON.stringify(newCart));
        }

        setData([]);
        setPrice(0);

        alert("Kosár sikeresen kiürítve.");
    }

    async function placeOrder() {
        try {
            const games = data.map((elem) => elem.id);
            const response =  await fetch("http://localhost:5000/cart",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({games: games}),
            });

            if(!response.ok){
                throw new Error("Hiba a rendelés leadásakor.");
            }

            const jsonData = await response.json();

            alert(jsonData.message);
            for (const product of data) {
                const newData = data.filter((elem) => elem.id != product.id);
                console.log(newData);

                const cart = JSON.parse(localStorage.getItem("cart"));
                const newCart = cart.filter((product_id) => product_id != product.id);
                localStorage.setItem("cart", JSON.stringify(newCart));
            }

            setData([]);
            setPrice(0);
        }catch(err){
            console.error(err);
            alert(err.message);
        }
    }

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
                                <th>Törlés</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{product.title}</td>
                                        <td>{product.price} Ft</td>
                                        <td><Image onClick={() => deleteFromCart(product)} src='../images/delete.png' style={{cursor:"pointer"}}></Image></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <Button onClick={emptyCart} variant='danger' className='mt-4'>Ürités</Button>
                </Col>
                <Col xs={12} md={4}>
                    <h2>Összesen: {price} Ft</h2>
                    <Button onClick={placeOrder} variant='light' className='mt-4'>Vásárlás</Button>
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
