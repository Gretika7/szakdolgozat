import {Carousel, Image} from 'react-bootstrap';
import ReactPlayer from "react-player";

export default () => {
  return (
        <Carousel>
            <Carousel.Item>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=lioPzgWttWQ"
                    playing={true}
                    controls={false}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="400px"
                />
                <Carousel.Caption>
                    <h3>Fortnite</h3>
                    <p>Best játék ever.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=lioPzgWttWQ"
                    playing={true}
                    controls={false}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="400px"
                />
                <Carousel.Caption>
                    <h3>Fortnite</h3>
                    <p>Best játék ever.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=lioPzgWttWQ"
                    playing={true}
                    controls={false}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="400px"
                />
                <Carousel.Caption>
                    <h3>Fortnite</h3>
                    <p>Best játék ever.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=lioPzgWttWQ"
                    playing={true}
                    controls={false}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="400px"
                />
                <Carousel.Caption>
                    <h3>Fortnite</h3>
                    <p>Best játék ever.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=lioPzgWttWQ"
                    playing={true}
                    controls={false}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="400px"
                />
                <Carousel.Caption>
                    <h3>Fortnite</h3>
                    <p>Best játék ever.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  );
}