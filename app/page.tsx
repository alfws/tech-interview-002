"use client"
import Navbar from "./components/Navbar";
import ProductsGrid from "./components/ProductsGrid";
import {ProductsContextProvider} from "./context/ProductsContext";

export default function Home() {
  return (
    <ProductsContextProvider>
      <main>
        <Navbar />
        <ProductsGrid />
      </main>
    </ProductsContextProvider>
  )
}
