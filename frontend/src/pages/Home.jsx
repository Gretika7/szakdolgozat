import { Container, Row, Col, Image } from "react-bootstrap";
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
                    throw new Error("Failed to fetch games");
                }
                const jsonData = await response.json();
                setData(jsonData);
            }catch(err){
                console.error(err);
                alert(err.message);
            }
        };
        fetchCard();
    }, []);


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
                        <Card data={item} />
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