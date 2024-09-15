
import "./Benifits.css"
import {
    Container, Row, Col

} from "react-bootstrap";
const data = [

    {
        icon : "fa fa-check",
        title : "100% Project based learning",
        subTitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fugiat pariatur ducimus officiis illum veniam."
    },
    {
        icon : "fa fa-check",
        title : "100% Project based learning",
        subTitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fugiat pariatur ducimus officiis illum veniam."
    },
    {
        icon : "fa fa-check",
        title : "100% Project based learning",
        subTitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fugiat pariatur ducimus officiis illum veniam."
    },
    {
        icon : "fa fa-check",
        title : "100% Project based learning",
        subTitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, fugiat pariatur ducimus officiis illum veniam."
    },
];

const List = ({data})=>{
    const design = <>
    <div className="d-flex mb-5">
        <div>
            <div className="icon-box">
                <i className={data.icon}></i>
            </div>
        </div>
        <div className="px-3">
            <h4>{data.title} </h4>
            <p>{data.subTitle} </p>
        </div>
    </div>
</>
return design
}


const Benifits = () => {
    const design = (
        <>
            <Container className="benifits mb-5">
                <h1 className="mb-5">Benifits of learning from just for code</h1>
                <Row className="reverse">
                    <Col md>
                        {
                            data.map((data, index) => {    
                                 return <List data={data} key={index} />
                            })   
                        }
                    </Col>
                    <Col md className="mb-5">
                            <img src="cod-boy.jpg" className="w-100 rounded-circle"  />
                    </Col>
                </Row>
            </Container>
        </>
    );
    return design
}



export default Benifits