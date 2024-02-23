import { useContext } from "react";
import { CategoryContext } from "../../context";

export default function Categories() {
    const { categories, selectedCategory, setSelectedCategory } =
        useContext(CategoryContext);
    return (
        <div className="container mx-auto mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                {categories.map((cat) => {
                    return (
                        <li key={cat}>
                            <a
                                className={`capitalize cursor-pointer underline-offset-4 ${
                                    selectedCategory === cat ? "underline" : ""
                                }`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
