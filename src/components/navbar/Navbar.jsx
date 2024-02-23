import Categories from "./Categories";
import CurrentDate from "./CurrentDate";
import Logo from "./Logo";
import Search from "./Search";

export default function Navbar() {
    return (
        <nav className="border-b border-black py-6 md:py-8">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
                <CurrentDate />
                <Logo />
                <Search />
            </div>
            <Categories />
        </nav>
    );
}
