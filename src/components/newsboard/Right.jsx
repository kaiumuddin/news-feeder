import RightFirst from "./RightFirst";
import RightRegular from "./RightRegular";

export default function Right() {
    return (
        <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                <RightFirst />
                <RightRegular />
                <RightRegular />
                <RightRegular />
                <RightRegular />
                <RightRegular />
                <RightRegular />
                <RightRegular />
            </div>
        </div>
    );
}
