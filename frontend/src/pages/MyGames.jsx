import { useEffect, useState } from "react";
import { Container, Col, Row, Table, Image } from 'react-bootstrap';

export default () => {
    const [games, setGames] = useState([]);

    useEffect(()=>{
        const fetchGames = async () =>{
            try {
                const response =  await fetch("http://localhost:5000/my-games",{
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    }
                });

                if(!response.ok){
                    throw new Error("Hiba a játékok betöltésekor!");
                }

                const jsonData = await response.json();
                console.log(jsonData);

                setGames(jsonData.games);
            }catch(err){
                console.error(err);
                alert(err.message);
            }
        };
        fetchGames();
    }, []);

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
                            {games.map((game, index) => {
                                console.log(games);
                                return (
                                    <tr key={index}>
                                        <td>{game.title}</td>
                                        <td>{game.price} Ft</td>
                                        <td>{game.purchase_date}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
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
