import Stars from "./Stars";
import Image from "next/image";

export default function ProductItem({product}: any) {
    return <div className="max-w-sm rounded overflow-hidden shadow-lg sm:mx-auto">
        <Image className="h-64 w-auto mx-auto" sizes="100vw" src={product.images[0]} alt={product.title} width={0} height={0} />
        <div className="mb-5">
            <div className="font-bold text-xl">{product.title}</div>
            <span className="inline-block text-white rounded-full text-sm font-bold">€ {product.price}</span>
        </div>
        <div className="mb-5 flex ">
            <Stars rating={Math.round(product.reviewAverageRating)} />
        </div>
        <div className="mb-5">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.category}</span>
            
        </div>
    </div>;

}