import { HISTORY_SEARCH_KEY } from "@/app/settings";

export const saveHistorySearch = (search : string) => {
    if (typeof window !== "undefined") {
        const currentHistory = localStorage.getItem(HISTORY_SEARCH_KEY);
        let history = currentHistory ? JSON.parse(currentHistory) : [];
        history.push({
            search: search,
            createdAt: new Date()
        });
        localStorage.setItem(HISTORY_SEARCH_KEY, JSON.stringify(history));
    }
}

export const getHistorySearch = () => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem(HISTORY_SEARCH_KEY) || "[]");
    }
    return [];
}

export const clearHistorySearch = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(HISTORY_SEARCH_KEY);
    }
}