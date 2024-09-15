import { Container, Row, Col, Button } from "react-bootstrap";
import { FaChartBar } from "react-icons/fa";
import "./Business.css"
const Business = () => {
    const design = (
        <>
            <Container className="business mb-3">
                <Row>
                    <Col md className="d-flex justify-content-center align-items-center ">
                        <div className="business-box ">
                            < FaChartBar className="chartbar" />
                            <h1>We'll help perfect</h1>
                                <h1>your business model.</h1>
                            <p className="mt-3">
                                Highlight specific services or products that are
                                unique to your business here. It can be your
                                flagship product, or a service that you've
                                pioneered. Give it room to shine here.
                            </p>
                        </div>
                    </Col>
                    <Col md className="mt-5 d-flex justify-content-center align-items-center">
                        <img src="stepup.png" className="w-100" />
                    </Col>
                </Row>
            </Container>
        </>
    );
    return design
}
export default Business