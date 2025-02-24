import { Container, Row, Col, Card, Image} from "react-bootstrap";

export default () => {
    return (
        <Container className="text-center mt-2">
            <Row className="mb-5">
            <h1 className="mb-3">Rólunk</h1>
                <Col xs={12} md={12} style={{backgroundColor:"#3e2246"}} className="rounded pb-3 mb-5">
                <h2 className="pt-3">Miért jött létre ez a webshop?</h2>
                <p>Ezt a weboldalt elsősorban azoknak hoztuk létre, akik szívesen töltik szabadidejüket videójátékokkal, de nem tudják, hol szerezhetnék be azokat olcsóbban, kényelmesebben és megbízható környezetben. 
                </p>
                <p>Oldalunk számos játék beszerzésére és különböző kiegészítők megrendelésére kínál lehetőséget, legyen szó akár új vagy régi játékokról. 
                </p>
                </Col>
                <Image src="../images/sample.png" fluid className="border border-light rounded"></Image>
            </Row>
            <Row className="mb-5">
                <h2 className="mb-4">Fejlesztői csapat és konzulens</h2>
                <Col xs={12} md={4}>
                    <Card className='mt-4 mb-4' style={{backgroundColor:"#3e2246" , color:"white",textAlign:"center"}}>
                        <Card.Body>
                            <Card.Title className='title'>Kerti Benjámin</Card.Title>
                            <Card.Text>Ő volt a Backend és Adatbázis fejlesztője és kivitelezője. Ő hozzá fűzödik az adatmodellünk és a szerver létrejötte.</Card.Text>
                            <Image src="../images/red-rose.png"></Image>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4}>
                    <Card className='mt-4 mb-4' style={{backgroundColor:"#3e2246" , color:"white",textAlign:"center"}}>
                        <Card.Body>
                            <Card.Title className='title'>Házi Gréti</Card.Title>
                            <Card.Text>Ő volt a Frontend fejlesztője, a felhasználói felület és felhasználói élmény tervezője, kivitelezője. Hozzá fűződik a projekt címe és tematikája.</Card.Text>
                            <Image src="../images/universe.png"></Image>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4}>
                    <Card className='mt-4 mb-4' style={{backgroundColor:"#3e2246" , color:"white",textAlign:"center"}}>
                        <Card.Body>
                            <Card.Title className='title'>Molnár Máté Norbert</Card.Title>
                            <Card.Text>A projekt során Ő volt a konzulensünk, aki végigkövette a folyamatokat. Tanító bácsi, nagyon hosszú hajjal.</Card.Text>
                            <Image src="../images/swan.png"></Image>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}