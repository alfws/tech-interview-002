import SearchHistory from "@/app/components/SearchHistory";
import Navbar from "@/app/components/Navbar";

export default function History(){
    return <main>
        <Navbar showSearchBar={false} />
        <SearchHistory />
    </main>
}