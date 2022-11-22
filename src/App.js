import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home";
import ErrorPage from "./pages/errorpage";
import {data} from "./data";
import ProductDetails from "./components/productdetails";
import Cart from "./components/cart";


const App = createBrowserRouter([
  {
    path: "/",
    element: <Home data={data} />,
    errorElement: <ErrorPage/>,
    children: [
      
    ]
  },
  {
    path: "products/:productname",
    element: <ProductDetails data={data} />,
  },
  {
    path: "cart",
    element: <Cart data={data} />,
  },
])

export default App;