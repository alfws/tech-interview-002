"use client"
import { useEffect, useState } from "react";
import {getHistorySearch, clearHistorySearch} from "@/app/helpers/history";

export default function SearchHistory(){
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        const history = getHistorySearch();
        if(!history) return;
        setSearchHistory(history);
    }, []);

    function handleClearSearch(){
        clearHistorySearch();
        setSearchHistory([]);
    }

    return <div className="w-full p-5">
        <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Search History</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClearSearch}>Clear History</button>
        </div>
        <div>
            {searchHistory.map((item: any) => (
                <div key={item.search} className="w-full border-b border-gray-300 py-3">
                    <p className="text-lg font-bold">{item.search}</p>
                    <p className="text-sm">{item.createdAt.toLocaleString()}</p>
                </div>
            ))}
        </div>
    </div>
}