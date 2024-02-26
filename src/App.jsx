import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NewsBoard from "./components/newsboard/NewsBoard";
import { NewsProvider, CategoryProvider, SearchProvider } from "./provider";

export default function App() {
    return (
        <CategoryProvider>
            <SearchProvider>
                <NewsProvider>
                    <Navbar />
                    <NewsBoard />
                    <Footer />
                </NewsProvider>
            </SearchProvider>
        </CategoryProvider>
    );
}
