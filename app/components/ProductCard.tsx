import { Product } from "../types";
import Image from "next/image";

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-gray-800">
      <div className="w-full h-48 relative">
        <Image
          src={product.thumbnail}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <h2 className="mt-2 text-xl font-semibold text-white">{product.title}</h2>
      <p className="text-white">{product.category}</p>
      <p className="text-red-800">${product.price}</p>
      <p className="text-yellow-500">Rating: {product.rating}</p>
    </div>
  );
};

export default ProductCard;
