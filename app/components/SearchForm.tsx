"use client"

import {useState} from "react";
import { useProductsContext } from "@/app/context/ProductsContext";
import {saveHistorySearch} from "@/app/helpers/history";
export default function SearchForm(){

    const {setProducts} = useProductsContext();

    const [rating, setRating] = useState<number>(0);
    const [priceMin, setPriceMin] = useState<number>(0);
    const [priceMax, setPriceMax] = useState<number>(0);

    function handleClearFilters(){
        setRating(0);
        setPriceMin(0);
        setPriceMax(0);
    }

    async function handleSearch(){
        const searchParams = new URLSearchParams();
        if(rating !== 0){
            searchParams.set('rating', rating.toString());
        }
        if(priceMin !== 0){
            searchParams.set('priceMin', priceMin.toString());
        }
        if(priceMax !== 0){
            searchParams.set('priceMax', priceMax.toString());
        }

        const url = `/api/search?${searchParams.toString()}`;
        saveHistorySearch(url);
        const res = await fetch(url).then((res) => res.json());
        setProducts(res.products);
    }

    return <div className="flex flex-wrap justify-center">
        
        <div className="relative w-full mb-5">
            <label htmlFor="labels-range-input">Rating</label>
            <input id="labels-range-input" type="range" value={rating} min="1" max="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={(e) => setRating(Number(e.target.value) || 0)} />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">1</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">5</span>
        </div>
        <div className="mt-5 w-full">
            <label htmlFor="price-min" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimun price:</label>
            <input type="number" value={priceMin} onChange={(e) => setPriceMin(Number(e.target.value) || 0)} id="price-min" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10" />
        </div>
        <div className="mt-5 w-full">
            <label htmlFor="price-max" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maximum price:</label>
            <input type="number" value={priceMax} onChange={(e) => setPriceMax(Number(e.target.value) || 0)} id="price-max" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10" />
        </div>

        <div className="mt-5 w-full flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClearFilters}>Clear Filters</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleSearch}>Search</button>
        </div>
    </div>
    
}