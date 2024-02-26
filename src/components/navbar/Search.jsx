import { useContext, useState } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import { SearchContext } from "../../context";
import { useDebounce } from "../../hooks";

export default function Search() {
    const [show, setShow] = useState(false);
    const { setSearchTerm } = useContext(SearchContext);
    const doSearch = useDebounce((term) => {
        setSearchTerm(term);
    }, 500);

    function handleChange(e) {
        doSearch(e.target.value);
    }

    return (
        <div className="flex gap-4">
            {show && (
                <div className="relative w-full">
                    <input
                        onChange={handleChange}
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search news..."
                        required
                    />
                </div>
            )}
            <div
                onClick={() => setShow(!show)}
                className="flex items-center space-x-3 lg:space-x-8"
            >
                <img src={SearchIcon} />
            </div>
        </div>
    );
}
