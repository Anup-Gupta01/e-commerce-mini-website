// import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";
import { Route,Routes} from "react-router-dom";
// import Spinner from "./components/Spinner";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { About } from "./pages/About";
import {ContactUs} from "./pages/ContactUs";

const App = () => {
  return (<div>
       <div className="bg-slate-900">
        <Navbar/>
       </div>
       <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>

<Route path="/contactus" element ={<ContactUs/>}/>

        <Route path="/cart" element ={<Cart/>}/>

       
       </Routes>
  </div>)
};

export default App;
