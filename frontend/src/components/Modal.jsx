import { useState, useEffect } from "react";
import { Modal, Image, Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

export default () => {
    const [lgShow, setLgShow] = useState(false);

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLogged(!!token);
    }, []);

    return (
        <>
            <Image
                style={{ cursor: "pointer", width: "40px", marginRight: "10px" }}
                src="../images/info.svg"
                onClick={() => setLgShow(true)}
            />
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                style={{ textAlign: "center" }}
            >
                <Modal.Header
                    closeButton
                    style={{
                        backgroundColor: "#3e2246",
                        color: "white",
                        borderBottom: "none",
                    }}
                    className="custom-modal-header"
                >
                    <Modal.Title id="modalTitle">Fortnite</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        backgroundColor: "#3e2246",
                        color: "white",
                        maxHeight: "80vh", 
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        padding: 0, 
                    }}
                >
                    <div style={{ width: "100%" }}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=lioPzgWttWQ"
                            playing={false}
                            controls={true}
                            loop={false}
                            muted={false}
                            width="100%"
                            height="400px"
                        />
                    </div>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <h2 className="mt-3">Tudnivalók</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nemo iste eius. Incidunt repellendus atque illo. Aperiam harum sint sequi commodi distinctio, quis odit consequatur deleniti adipisci quasi qui dolorum officiis. Quam, odio. Cupiditate ullam provident, sint dicta unde quod maiores molestias, et nisi architecto eius. Rerum architecto quam qui id eum est neque, dolorum eos fuga dolores ipsa assumenda, reiciendis dolorem blanditiis corrupti alias! Corporis voluptate non aspernatur illo voluptatem amet quaerat beatae! Vel, rem dolores, nihil alias quisquam, non deserunt accusamus labore autem officia repellat voluptates atque culpa nesciunt ducimus mollitia? Nihil, molestiae nobis aliquam vitae praesentium fuga!</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <h3>Rendszerkövetelmények</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quibusdam ullam iste quaerat id maiores alias pariatur necessitatibus mollitia tenetur sit deserunt et, optio neque illum ex accusamus minus nesciunt itaque quos vel, illo repellat! Ratione delectus sit exercitationem qui neque repellat, aperiam ex dolorum non distinctio vel, quas ullam!</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <h3>Gyártó</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias dolores debitis mollitia omnis, in voluptas expedita aperiam voluptatem accusamus.</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer
                    style={{
                        backgroundColor: "#3e2246",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        borderTop: "none",
                    }}
                >
                    {isLogged ? <Image style={{ cursor: "pointer", width: "40px" }} src="../images/cart.svg" /> : ""}
                </Modal.Footer>
            </Modal>

            <style>
                {`
                    .custom-modal-header .btn-close {
                        filter: invert(1);
                    }
                `}
            </style>
        </>
    );
};
