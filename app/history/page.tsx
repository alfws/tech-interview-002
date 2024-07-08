// File: app/pages/history.tsx

"use client";

import { useState, useEffect } from "react";

interface SearchHistory {
  rating: string;
  priceMin: string;
  priceMax: string;
}

const HistoryPage = () => {
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const loadSearchHistory = () => {
    const history = localStorage.getItem("searchHistory");
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Search History</h1>
      {searchHistory.length === 0 ? (
        <p className="text-lg text-gray-600">No search history available.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {searchHistory.map((query, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-lg text-black font-semibold mb-2">
                Rating: {query.rating}, Min Price: {query.priceMin}, Max Price:{" "}
                {query.priceMax}
              </p>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={clearSearchHistory}
        className="bg-red-500 text-white py-2 px-4 mt-4 rounded-md shadow-md hover:bg-red-600 transition-colors"
      >
        Clear History
      </button>
    </div>
  );
};

export default HistoryPage;
