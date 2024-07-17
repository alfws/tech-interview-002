import { createContext, useContext, useState } from "react";

const ProductsContext = createContext<any>({
    products: [],
    setProducts: () => {},
});

export const ProductsContextProvider = ({ children }: any) => {
    const [products, setProducts] = useState<any>([]);
    
    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductsContext = () => useContext(ProductsContext)