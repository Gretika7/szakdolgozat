import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card";

export default () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Fortnite"}
                        img={"../images/fortnite.jpg"}
                        text={"A Fortnite egy Epic Games által fejlesztett 2017-ben kiadott videójáték. Három különálló játékmódverzióban érhető el: Save the World ; Battle Royale ; Creative"}></Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Grand Theft Auto"}
                        img={"../images/gta.jpg"}
                        text={"A Grand Theft Auto, (GTA) egy nyílt világú akció-kaland videójáték-sorozat. Fejlesztője a skót Rockstar North, forgalmazója pedig a Rockstar Games. Az első játékok stílusa felülnézetes akció volt, míg az újabbaké már külső nézetes akció."}></Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Sims"}
                        img={"../images/sims.jpg"}
                        text={"A The Sims egy életszimulációs videojáték-sorozat, amelyet a Maxis fejlesztett ki és az Electronic Arts adott ki. A franchise-ból közel 200 millió példány kelt el világszerte, és minden idők egyik legkelendőbb videojáték-sorozata. Ez is része a nagyobb Sim sorozatnak, amelyet a SimCity indított el 1989-ben."}></Card>
                </Col>
                <Col xs={12} md={3}>
                    <Card 
                        title={"Minecraft"}
                        img={"../images/minecraft.jpg"}
                        text={"A Minecraft nyílt világú sandbox videójáték, melyet a svéd Markus Persson indított útjára 2009-ben,[24] és a Mojang adott ki 2011-ben. A Minecraftban a játékosok egy blokkokból álló, pixeles, 3D világot fedezhetnek fel.A Minecraft nagy népszerűségnek örvend, számos díjat nyert el és minden idők egyik legbefolyásosabb játéka lett."}></Card>
                </Col>
            </Row>
        </Container>
    );
}