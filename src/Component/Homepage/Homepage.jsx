import "./Homepage.css"
import Meeting from "./Meeting/Meeting";
import Category from "./Category/Category";
import Benifits from "./Benifits/Benifits";
import Experience from "./Experience/Experience";
import Philosophy from "./Philosophy/Philosophy";
import OurServices from "./OurServices/OurServices";
import Business from "./Business/Business";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "../Footer/Footer";
const Homepage = () => {
    const design = (
        <>
          <Meeting />  
          <Category />
          <Benifits />
          <Experience />
          <Philosophy />
          <OurServices />
          <Business />
          <Testimonials />
          <Footer />
        </>
    );
    return design
}
export default Homepage