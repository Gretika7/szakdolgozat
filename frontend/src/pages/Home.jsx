import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import ReactPlayer from 'react-player';
import ChangeCard from "../components/ChangeCard";

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
                     <ReactPlayer 
                        url="https://www.youtube.com/watch?v=lioPzgWttWQ"
                        playing={true}  
                        controls={false}  
                        loop={true}  
                        muted={true} 
                        width="100%" 
                        height="100%"
                    />
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
            <Row>
                <Col xs={12} md={12}>
                    <ChangeCard 
                    title={"Fortnite"}
                    img={"../images/fortnite.jpg"}
                    text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative. A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative.A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}
                    >
                    </ChangeCard>
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
        </Container>
    );
}