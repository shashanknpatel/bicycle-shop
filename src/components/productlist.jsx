import Products from "../components/products";
import ProductTitle from "../components/producttitle";

export default function ProductList() {
    return(
        <div className="px-4 py-8 mx-auto max-w-screen-xl">
            <ProductTitle/>
            <div className="pl-12 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8">
                <Products/>
            </div>
        </div>
    );
}