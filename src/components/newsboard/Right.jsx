import RightFirst from "./RightFirst";
import RightRegular from "./RightRegular";
import { NewsContext } from "../../context";
import { useContext } from "react";
import { zeroMover } from "../../utils/move-zeros";
import { formatDate } from "../../utils/format-date";

export default function Right() {
    const { newsData } = useContext(NewsContext);
    let news = newsData.slice(newsData.length / 2, newsData.length);
    news = zeroMover(news);
    news = news.map((news) => {
        return {
            ...news,
            publishedAt: formatDate(news.publishedAt),
        };
    });

    return (
        <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                {news.map((news, index) => {
                    if (index === 0) {
                        return <RightFirst key={index} news={news} />;
                    }
                    return <RightRegular key={index} news={news} />;
                })}
            </div>
        </div>
    );
}
