import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../context";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const useNewsQuery = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [newsData, setNewsData] = useState([]);
    const { selectedCategory, setSelectedCategory } =
        useContext(CategoryContext);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    const fetchNewsData = async (category) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fething news data...",
            });

            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

            // const url = `http://localhost:8000/v2/top-headlines?category=${category}`;
            const response = await fetch(url);
            if (!response.ok) {
                const errorMessage = `Fetching news data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setNewsData([...data.articles]);
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

    const fetchSearchNewsData = async (term) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fething news data...",
            });

            const url = `https://newsapi.org/v2/everything?q=${term}&apiKey=${API_KEY}`;
            // const url = `http://localhost:8000/v2/search?q=${term}`;
            const response = await fetch(url);
            if (!response.ok) {
                const errorMessage = `Fetching news data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            setNewsData([...data.articles]);
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

    useEffect(() => {
        if (searchTerm !== "") {
            fetchSearchNewsData(searchTerm);
        } else {
            fetchNewsData(selectedCategory);
        }
    }, [searchTerm]);

    return { error, loading, newsData };
};

export default useNewsQuery;
