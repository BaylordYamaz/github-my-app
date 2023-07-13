// import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Product from "./component/product";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Register from "./component/register";
import Pricing from "./component/Pricing";
import About from "./component/About";
import ServiceLogin from "./Redux/ServiceLogin";
import Pay from "./Cart/Pay"



export default function App() {
  return (
    <div>
    <Router>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/ServiceLogin" element={<ServiceLogin></ServiceLogin>} />
          <Route path="/Pricing" element={<Pricing/>}></Route>
          <Route path="/pay" element={<Pay></Pay>}/>
      </Routes>
      <Footer/>
    </Router>
   
    </div>

  );
}
// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
