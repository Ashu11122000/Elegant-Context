import { useState } from "react";
import {FiShoppingCart, FiHeart, FiMenu, FiUser} from "react-icons/fi";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 border-b border-white/10 bg-[#31220b]/95 backdrop-blur-md">
                <div className="app-container flex h-20 items-center justify-between gap-8">
                    <div className="shrink-0">
                        <h1 className="text-3xl font-bold tracking-wide text-[#edbf68]">
                            Elegant
                        </h1>
                    </div>

                    <Navbar />

                    <div className="flex flex-1 justify-center">
                        <SearchBar />
                    </div>

                    <div className="flex shrink-0 items-center gap-5">
                        <button>
                            <FiHeart className="text-2xl text-[#f3e7d4] hover:text-[#edbf68]" />
                        </button>

                        <button>
                            <FiShoppingCart className="text-2xl text-[#f3e7d4] hover:text-[#edbf68]" />
                        </button>

                        <button>
                                <FiUser className="text-2xl text-[#f3e7d4] hover:text-[#edbf68]" />
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden"
                        >
                            <FiMenu className="text-3xl text-[#edbf68]" />
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
}

export default Header;