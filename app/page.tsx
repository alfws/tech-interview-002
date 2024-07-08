"use client";

import ProductCard from "./components/ProductCard";
import { Product } from "./types";
import NavBar from "./components/NavBar";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  return (
    <div >
      <NavBar setProducts={setProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
