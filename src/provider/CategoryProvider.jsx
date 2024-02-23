import { useState } from "react";
import { CategoryContext } from "../context";

export default function CategoryProvider({ children }) {
    const categories = [
        "general",
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology",
    ];
    const [selectedCategory, setSelectedCategory] = useState("general");

    return (
        <CategoryContext.Provider
            value={{ categories, selectedCategory, setSelectedCategory }}
        >
            {children}
        </CategoryContext.Provider>
    );
}
