import {Carousel, Image} from 'react-bootstrap';

export default () => {
  return (
        <Carousel>
            <Carousel.Item>
                <Image src="../images/games_images/codwarzone.png" fluid></Image>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="../images/games_images/codwarzone.png" fluid></Image>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="../images/games_images/codwarzone.png" fluid></Image>
            </Carousel.Item>
        </Carousel>
  );
}