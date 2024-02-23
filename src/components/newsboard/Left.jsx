import LeftFirstItem from "./LeftFirstItem";
import LeftRegular from "./LeftRegular";
import LeftSecondItem from "./LeftSecondItem";

export default function Left() {
    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {/* <!-- news item --> */}
            <LeftFirstItem />
            {/* <!-- news item ends --> */}
            {/* <!-- news item --> */}
            <LeftSecondItem />
            {/* <!-- news item ends --> */}
            {/* <!-- news item --> */}
            <LeftRegular />
            <LeftRegular />
            <LeftRegular />
            <LeftRegular />
            <LeftRegular />
            <LeftRegular />
            <LeftRegular />
        </div>
    );
}
