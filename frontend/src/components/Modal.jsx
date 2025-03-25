import { useState, useEffect } from "react";
import { Modal, Image, Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

export default ({ data }) => {
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
                    <Modal.Title id="modalTitle">{data.title}</Modal.Title>
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
                            url={data.link}
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
                                <p>{data.long_description}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <h3>Rendszerkövetelmények</h3>
                                <p>{data.system_requirements}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <h3>Gyártó</h3>
                                <p>{data.company}</p>
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
