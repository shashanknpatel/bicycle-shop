import Navbar from "../components/navbar";
import Wallpaper from "../components/wallpaper";
import ProductList from "./productlist";

export default function Home({data}) {
    return(
        <>
            <Navbar/>
            <Wallpaper/>
            <ProductList data={data} />
        </>
    );
}