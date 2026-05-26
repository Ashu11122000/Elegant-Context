function Sidebar() {
    return (
        <aside className="hidden lg:block w-64 rounded-xl bg-[#5f4e33 p-5">
            <h2 className="mb-4 text-xl font-bold text-[#edbf68">
                Categories
            </h2>

            <ul className="space-y-3">
                <li className="text-[#f3e7d4]">Men</li>
                <li className="text-[#f3e7d4]">Women</li>
                <li className="text-[#f3e7d4]">Accessories</li>
                <li className="text-[#f3e7d4]">Luxury</li>
            </ul>
        </aside>
    );
}

export default Sidebar;