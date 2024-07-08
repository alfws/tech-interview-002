"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../types";

interface SearchHistory {
  rating: string;
  priceMin: string;
  priceMax: string;
}

interface NavBarProps {
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const NavBar: React.FC<NavBarProps> = ({ setProducts }) => {
  const [rating, setRating] = useState<string>("");
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);

  useEffect(() => {
    const history = JSON.parse(
      localStorage.getItem("searchHistory") || "[]"
    ) as SearchHistory[];
    setSearchHistory(history);
  }, []);

  useEffect(() => {
    console.log("priceMin : ", priceMin);
    console.log("priceMax : ", priceMax);
    console.log("rating : ", rating);
  }, [priceMin, priceMax, rating]);

  const storeSearchesLocalStorage = () => {
    // Update search history
    const newSearch: SearchHistory = { rating, priceMin, priceMax };
    const updatedHistory = [...searchHistory, newSearch];
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const submitFormHanlder = async () => {
    storeSearchesLocalStorage();
    console.log("calling the API :");
    console.log("API : ");

    try {
      const response = await axios.get("/api/search", {
        params: { rating, priceMin, priceMax },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <nav className="w-full p-4 bg-blue-400 text-black border grid gap-4 md:grid-cols-4">
      <input
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="mr-2 p-2 border border-gray-300"
      />
      <input
        placeholder="Min Price"
        value={priceMin}
        onChange={(e) => setPriceMin(e.target.value)}
        className="mr-2 p-2 border border-gray-300"
      />
      <input
        placeholder="Max Price"
        value={priceMax}
        onChange={(e) => setPriceMax(e.target.value)}
        className="mr-2 p-2 border border-gray-300"
      />
      <button
        onClick={submitFormHanlder}
        className="bg-blue-600 text-white px-3 py-2 md:col-span-1"
      >
        Search
      </button>
    </nav>
  );
};

export default NavBar;
