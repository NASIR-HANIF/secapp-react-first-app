import { Container, Row, Col, Button, Card } from "react-bootstrap";


import "./Testimonials.css"
const Testimonials = () => {
    const design = (
        <>
            <Container className="testimonials-container mt-3 mb-5 text-center">
                <h2>Client Testimonials</h2>
                <p>
                    Boost your product and service's credibility by
                </p>
                <p className=" mb-5">adding testimonials from your clients.</p>
                <Row>
                    <Col md className="mt-5 mt-md-0">
                        <div className="testimonials-card">
                            <div className="testimonials-img">
                                <img src="a.png" />
                            </div>
                            <div className="testimonials-body">
                                <p>Boost your product and
                                    service's credibility by adding
                                    testimonials from your clients.</p>
                                <p>People love recommendations
                                    so feedback from others who've
                                    tried it is invaluable.
                                </p>
                                <p className="testimonials-link">
                                - Carly Ferris, Strews Inc
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md className="mt-5 mt-md-0">
                        <div className="testimonials-card">
                            <div className="testimonials-img">
                                <img src="b.png" />
                            </div>
                            <div className="testimonials-body">
                                <p>Boost your product and
                                    service's credibility by adding
                                    testimonials from your clients.</p>
                                <p>People love recommendations
                                    so feedback from others who've
                                    tried it is invaluable.
                                </p>
                                <p className="testimonials-link">
                                - Carly Ferris, Strews Inc
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md className="mt-5 mt-md-0">
                        <div className="testimonials-card">
                            <div className="testimonials-img">
                                <img src="c.png" />
                            </div>
                            <div className="testimonials-body">
                                <p>Boost your product and
                                    service's credibility by adding
                                    testimonials from your clients.</p>
                                <p>People love recommendations
                                    so feedback from others who've
                                    tried it is invaluable.
                                </p>
                                <p className="testimonials-link">
                                - Carly Ferris, Strews Inc
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
    return design
}
export default Testimonials