import { useContext } from "react";
import { NewsContext } from "../../context";
import Left from "./Left";
import Right from "./Right";
import Spinner from "./Spinner";

export default function NewsBoard() {
    const { loading } = useContext(NewsContext);

    return (
        <main className="my-10 lg:my-14">
            {loading.state && (
                <div className="h-full flex items-center justify-center">
                    <Spinner />
                </div>
            )}
            {!loading.state && (
                <div className="container mx-auto grid grid-cols-12 gap-8">
                    <Left />
                    <Right />
                </div>
            )}
        </main>
    );
}
