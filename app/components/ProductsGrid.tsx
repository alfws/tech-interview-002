import {useProductsContext} from "@/app/context/ProductsContext";
import ProductItem from "./ProductItem";

export default function ProductsGrid(){
    const {products} = useProductsContext();

    return <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-3">
        {products.map((product: any) => (
            <ProductItem key={product.id} product={product} />
        ))}
    </div>
}