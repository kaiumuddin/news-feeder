export default function LeftFirstItem({ news }) {
    return (
        <div className="col-span-12 grid grid-cols-12 gap-4">
            {/* <!-- info --> */}
            <div className="col-span-12 lg:col-span-4">
                <a href="#">
                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                        {news?.title}
                    </h3>
                </a>
                <p className="text-base text-[#5C5955]">{news?.description}</p>
                <p className="mt-5 text-base text-[#5C5955]">
                    {news?.publishedAt}
                </p>
            </div>
            {/* <!-- thumb --> */}
            <div className="col-span-12 lg:col-span-8">
                <img className="w-full" src={news?.urlToImage} alt="thumb" />
                <p className="mt-5 text-base text-[#5C5955]">
                    Illustration: {news?.author}
                </p>
            </div>
        </div>
    );
}
