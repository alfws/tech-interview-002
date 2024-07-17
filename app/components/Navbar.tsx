import SearchForm from "./SearchForm";

export default function Navbar({showSearchBar = true}) {

    let searchBar = null;
    if(showSearchBar){
        searchBar = (
          <div className="flex justify-center">
            <SearchForm />
          </div>
        );
    }
    return <nav className="w-full p-5">
        <div className="flex mb-10">
            <a className="text-3xl font-bold" href="/">Tech Interview</a>
            <a className="text-3xl ml-5" href="/history">Search History</a>
        </div>
        {searchBar}
    </nav>
}