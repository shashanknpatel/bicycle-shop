import Navbar from "../components/navbar";
import ProductList from "../components/productlist";
import Wallpaper from "../components/wallpaper";

export default function Home() {
    return(
        <>  
            <Navbar/>
            <Wallpaper/>
            <ProductList/>   
        </>
    )
}