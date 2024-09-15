import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Homepage from "./Component/Homepage/Homepage"
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css"
import { BrowserRouter , Routes, Route } from "react-router-dom";



const App = () => {
  const design = (
    <>
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<h1>Blog route</h1>} />
            <Route path="/website" element={<h1>Website route</h1>} />
            <Route path="/services" element={<h1>services route</h1>} />
          </Routes> 
    </BrowserRouter>
    </>
  );
  return design;
};

export default App;
