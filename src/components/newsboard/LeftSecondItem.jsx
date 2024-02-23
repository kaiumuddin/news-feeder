export default function LeftSecondItem() {
    return (
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
            {/* <!-- info --> */}
            <div className="col-span-12 md:col-span-6">
                <a href="">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                        Gold hits eight-month low as higher bond yields dent its
                        appeal
                    </h3>
                </a>
                <p className="text-base text-[#292219]">
                    Exchange traded funds tracking the metal sustain biggest
                    outflows in a year
                </p>
                <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
            </div>
            {/* <!-- thumb --> */}
            <div className="col-span-12 md:col-span-6">
                <img className="w-full" src="./assets/thumb.png" alt="thumb" />
            </div>
        </div>
    );
}
