import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import './index.css'
import ProductDetails from './pages/productdetails'
import Cart from './components/cart'
import { CartProvider } from 'react-use-cart'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path: "products/:productname",
    element: <ProductDetails/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "products/:productname/cart",
    element: <Cart/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  
)

