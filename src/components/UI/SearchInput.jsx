import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import Input from "./Input";

function SearchInput({
    placeholder = "Search products...",
    value,
    onChange,
    onSearch,
    disabled = false,
    variant = "outlined",
    className = "",
}) {
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && onSearch && !disabled) {
            onSearch(event);
        }
    };

    const handleSearchClick = () => {
        if (onSearch && !disabled) {
            onSearch();
        }
    };

    return (
        <div className={`relative w-full ${className}`}>
            <Input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                variant={variant}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                className="pr-14"
            />

            <button
                type="button"
                onClick={handleSearchClick}
                disabled={disabled}
                className="
                    absolute
                    right-2
                    top-1/2
                    -translate-y-1/2
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#edbf68]
                    text-[#1f1606]
                    transition-all
                    duration-300
                    hover:bg-[#d9aa4f]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >
                <FaSearch />
        </button>
    </div>
    );
}

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(["outlined", "filled"]),
    className: PropTypes.string,
};

export default SearchInput;