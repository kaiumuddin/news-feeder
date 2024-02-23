import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context";

const useNewsQuery = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [newsData, setNewsData] = useState([]);
    const { selectedCategory } = useContext(CategoryContext);

    const fetchNewsData = async (selectedCategory) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fething news data...",
            });

            const url = `http://localhost:8000/v2/top-headlines?category=${selectedCategory}`;
            const response = await fetch(url);
            if (!response.ok) {
                const errorMessage = `Fetching news data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setNewsData(data.articles);
        } catch (error) {
            setError(error);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    };

    useEffect(() => {
        fetchNewsData(selectedCategory);
    }, [selectedCategory]);

    return { error, loading, newsData };
};

export default useNewsQuery;
