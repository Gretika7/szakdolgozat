import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "../components/Card";
import ChangeCard from "../components/ChangeCard";
import ChangeImage from "../components/ChangeImage";

export default () => {
    return (
        <Container>
            <Row>
                <h1 className="text-center mt-2">Főoldal</h1>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                       title={"Fortnite"}
                       img={"../images/fortnite.jpg"}
                       text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                       </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
            </Row>
            <Row>
            <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
                <Col xs={12} md={9} className='mt-4 mb-4'>
                    <ChangeImage></ChangeImage>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                       title={"Fortnite"}
                       img={"../images/fortnite.jpg"}
                       text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                       </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
            </Row>
            <Row className="mt-4 mb-4">
                <Col xs={12} md={12}>
                    <ChangeCard></ChangeCard>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                       title={"Fortnite"}
                       img={"../images/fortnite.jpg"}
                       text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                       </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}>
                        </Card>
                </Col>
            </Row>
        </Container>
    );
}