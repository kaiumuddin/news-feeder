import LeftFirstItem from "./LeftFirstItem";
import LeftRegular from "./LeftRegular";
import LeftSecondItem from "./LeftSecondItem";
import { NewsContext } from "../../context";
import { useContext } from "react";
import { zeroMover } from "../../utils/move-zeros";
import { formatDate } from "../../utils/format-date";

export default function Left() {
    const { newsData } = useContext(NewsContext);
    let news = newsData?.slice(0, 100);
    news = newsData?.slice(0, newsData.length / 2);
    news = zeroMover(news);
    news = news?.map((news) => {
        return {
            ...news,
            publishedAt: formatDate(news.publishedAt),
        };
    });

    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {news?.map((news, index) => {
                if (index === 0) {
                    return <LeftFirstItem key={index} news={news} />;
                }
                if (index === 1) {
                    return <LeftSecondItem key={index} news={news} />;
                }

                return <LeftRegular key={index} news={news} />;
            })}
        </div>
    );
}
