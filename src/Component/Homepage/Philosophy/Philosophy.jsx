import { Container, Row, Col, Button } from "react-bootstrap";
import "./Philosophy.css"
const Philosophy = () => {
    const design = (
        <>
            <Container className="philosophy-container mt-5 mb-5">
                <Row>
                    <Col></Col>
                    <Col md="6">
                        <div className="philosophy-box">
                            <div>
                                <h2>
                                    This text block gives a brief
                                    overview of your company. Share your
                                    philosophy, vision, or mantra here.
                                </h2>
                            </div>
                            <div className="mt-5">
                                <img src="web_shopping.png" width="70%" />
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
    return design
}
export default Philosophy