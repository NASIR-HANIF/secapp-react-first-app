import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaChartBar, FaLightbulb, FaPlay } from "react-icons/fa";

import "./OurServices.css"
const OurServices = () => {
    const design = (
        <>
            <Container className="ourServices-container mt-3 mb-5">
                <h2>Our Services</h2>
                <p className="w-75 mb-5">Share your services or product offerings here. Present them as simple headers that
                    can lead out to their pages where you can expound on them further. You can also
                    use this space for other purposes where the information is best presented as mere
                    teasers to other individualized pages.
                </p>
                <Row>
                    <Col md className="mt-5 mt-md-0">
                        <Card >
                            <Card.Body className="text-center">
                                <div className="icon-box">
                                    <i className="fa fa-hashtag iborder"></i>
                                    <i className="fa fa-heart iborder"></i>
                                    <FaPlay className="iborder mt-2" />
                                </div>
                                <Card.Title className="cardTitle">BUSINESS MODEL</Card.Title>
                                <Card.Text>
                                    You can also use this space for other
                                    purposes where the information is
                                    best presented as mere teasers to
                                    other individualized pages.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md className="mt-5 mt-md-0">
                        <Card >
                            <Card.Body className="text-center">
                                <div className="icon-box">
                                    < FaChartBar className="iborder" />
                                </div>
                                <Card.Title className="cardTitle">BUSINESS MODEL</Card.Title>
                                <Card.Text>
                                    You can also use this space for other
                                    purposes where the information is
                                    best presented as mere teasers to
                                    other individualized pages.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md className="mt-5 mt-md-0">
                        <Card >
                            <Card.Body className="text-center">
                                <div className="icon-box">
                                    <FaLightbulb />
                                </div>
                                <Card.Title className="cardTitle">BUSINESS MODEL</Card.Title>
                                <Card.Text>
                                    You can also use this space for other
                                    purposes where the information is
                                    best presented as mere teasers to
                                    other individualized pages.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
    return design
}
export default OurServices