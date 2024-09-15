import { Container, Row, Col, Button } from "react-bootstrap";
import "./Experience.css"
const Experience = () => {
    const design = (
        <>
            <Container className="experience mb-3">
                <Row>
                    <Col md>
                        <div className="mx-5 experience-box">
                            <div >
                                <p className="fleuri">Fleuri + Co.</p>
                            </div>
                            <div className=" mt-5">
                                <h1>Experience </h1>
                                <h1>excellence</h1>
                                <h1>with us.</h1>
                                <p className="mt-2">Your partner in business</p>
                                <Button className="btn btn-dark experienceBtn ">LEARN MORE</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md className="mt-5">
                        <img src="two-students.png" className="w-100" />
                    </Col>
                </Row>
            </Container>
        </>
    );
    return design
}
export default Experience