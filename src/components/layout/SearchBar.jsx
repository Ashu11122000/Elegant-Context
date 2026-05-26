import { FiSearch } from "react-icons/fi";

function SearchBar() {
    return (
        <div className="relative hidden lg:block w-80">
            <input 
                type="text" 
                placeholder="Search Products..." 
                className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 pr-12 text-white placeholder:text-gray-300"
            />

            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#edbf68]" />
        </div>
    );
}

export default SearchBar;