import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddProduct from "./components/addproduct";
import HomePage from "./components/homepage";
import ProductDetails from "./components/productdetails";


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addproduct" element={<ProductDetails/>} />
        <Route path="/addproduct/checkout" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}