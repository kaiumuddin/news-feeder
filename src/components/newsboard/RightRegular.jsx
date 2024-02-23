export default function RightRegular({ news }) {
    return (
        <div className="col-span-12 md:col-span-8">
            {/* <!-- info --> */}
            <div className="col-span-12 md:col-span-4">
                <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                        {news?.title}
                    </h3>
                </a>
                <p className="text-base text-[#292219]">{news?.description}</p>
                <p className="mt-5 text-base text-[#94908C]">
                    {news?.publishedAt}
                </p>
            </div>
        </div>
    );
}
