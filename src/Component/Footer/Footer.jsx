import { Container, Row, Col, Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css"
const Footer = () => {
    const design = (
        <>
            <Container className="footer mt-5 mb-3 text-center">
                <Row>
                    <Col md>
                    <img src="one-programer.png" className="w-100" />
                    </Col>
                    <Col md className="mt-5">
                       
                        <div className="footer-box">
                            <div >
                                <h1>Contact Us</h1>
                            </div>
                            <div className=" mt-5">
                                <h3>PHONE</h3>
                                <p>(92) 3170046777</p>
                                <h3>EMAIL</h3>
                                <p className="mt-2">nasir127sb@gmail.com</p>
                                <h3>SOCIAL</h3>
                               <div className="social-icon">
                               <i className="fa fa-facebook-f"></i>
                               <i className="fa fa-twitter"></i>
                               <i className="fa fa-instagram"></i>
                               </div>
                               
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
    return design
}
export default Footer