import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

export default function NewsProvider({ children }) {
    const { error, loading, newsData } = useNewsQuery();
    return (
        <NewsContext.Provider value={{ error, loading, newsData }}>
            {children}
        </NewsContext.Provider>
    );
}
