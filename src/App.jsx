import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import NewsBoard from "./components/newsboard/NewsBoard";
import { NewsProvider, CategoryProvider } from "./provider";

export default function App() {
    return (
        <CategoryProvider>
            <NewsProvider>
                <Navbar />
                <NewsBoard />
                <Footer />
            </NewsProvider>
        </CategoryProvider>
    );
}
